import React, { useEffect, useState } from 'react';
import { MdPeople } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';
import { ClipLoader } from "react-spinners";
import '../styles/cards.scss';
import { css } from "@emotion/core";
import filters from '../model/filters/workflow.json';

function Cards({ filteredCards }) {
    const filteredData = { filteredCards };
    const [cards, setCards] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    const [showEditMenu, setShowEditMenu] = useState(false);
    const [showClickedMenu, setShowClickedMenu] = useState([]);
    const [availableWorkFlow, setAvailableWorkFlow] = useState([]);
    let [spinnerColor, setSpinnerColor] = useState("#dc5b28");

    const override = css`
    display: block;
    margin: 0 auto;
    `;

    const fetchCards = 'http://localhost:5000/cards';

    useEffect(() => {
        setAvailableWorkFlow(filters);
        setShowLoader(true);
        setTimeout(() => {
            getCards();
            setShowLoader(false);
        }, 1000)
    }, [filteredData.filteredCards])

    function getCards() {
        setCards(filteredData.filteredCards);
    }

    function editCard(card) {
        const currentTitle = card.cardTitle;
        showClickedMenu[currentTitle] = !showClickedMenu[currentTitle];
        setShowEditMenu(showClickedMenu[currentTitle])
        setAvailableWorkFlow(filterWorkflows(card));
    }

    function filterWorkflows(card) {
        let availableWorkFlows = filters.filter(v => {
            return v !== card.currentWorkflow;
        })
        return availableWorkFlows;
    }

    const updateWorkFlow = (card, filter) => {
        setShowLoader(true);
        setTimeout(()=> {
            card.currentWorkflow = filter ? filter : card.currentWorkflow;
             setShowLoader(false);
        }, 5000)
        setShowEditMenu(false);
    }

    return (
        <>
            <div className="container w-100 m-auto">
                <div className="row d-flex">
                    {
                        showLoader ? <ClipLoader size={100} color={spinnerColor} css={override} /> : cards && cards.map(card =>
                            <div className="col-lg-4 col-md-4 col-sm-1 m-auto" key={card.cardTitle}>
                                <div className="card mb-4" id={card.cardTitle}>
                                    <FaPencilAlt className="edit-card" onClick={editCard.bind(null, card)} />
                                    <img className="card-img-top" src={card.primaryMediaUrl} alt="Card image cap" />
                                    {
                                        showClickedMenu[card.cardTitle] === true && showEditMenu ?
                                            <div>
                                                <ul className="action-items">
                                                    {
                                                        availableWorkFlow.map(filter =>
                                                            <li key={filter} onClick={updateWorkFlow.bind(null, card, filter)}>{filter}</li>
                                                        )
                                                    }
                                                </ul>
                                            </div> : null
                                    }
                                    <div className="card-body">
                                        <h5 className="card-title">{card.cardTitle}</h5>
                                        <div className="row basecolor">
                                            <div className="col-6 text-left">
                                                <small>{card.listOfPlans[0].price.currencySymbol}</small>
                                                <small>5000 / Month</small>
                                            </div>
                                            <div className="col-6 text-right">
                                                <small className="status">{card.currentWorkflow}</small>
                                            </div>
                                        </div>
                                        {card.currentWorkflow !== 'saved' ?
                                            <div className="progress" style={{ height: "8px" }}>
                                                <div className="progress-bar" role="progressbar" ></div>
                                            </div>
                                            : <div className="progress-complete" style={{ height: "8px" }}>
                                                <div className="progress-bar" role="progressbar" ></div>
                                            </div>
                                        }
                                    </div>
                                    <div className="card-footer text-muted d-flex text-center p-0" style={{ height: "35px" }} key={card.title}>
                                        <div className="col-4 basecolor">
                                            <FaDatabase className="icon-font mr-1" />
                                            <small>{card.listOfPlans[0].price.currencySymbol}</small>
                                            <small>{card.listOfPlans[0].price.amount}</small>
                                        </div>
                                        <div className="col-4 text-center basecolor">
                                            <MdPeople className="icon-font mr-1" />
                                            <small>{card.subscribers}</small>
                                        </div>
                                        <div className="col-4 basecolor text-right">
                                            <FaEye className="icon-font mr-1" />
                                            <small>{card.views}k</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Cards
