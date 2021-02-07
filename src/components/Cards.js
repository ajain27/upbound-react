import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { MdPeople } from 'react-icons/md';
import { FaEye } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

import '../styles/cards.scss';
import cardData from '../model/cards/cards.json'
import campaignData from '../model/campaigns/campaigns.json'

function Cards() {
    const url = '../model/cards/cards.json'
    const [cards, setCards] = useState(cardData)

    useEffect(() => {
        setTimeout(() => {
            getCards();
        }, 1000)
    }, [])

    function getCards() {
        setCards(cardData)
    }

    return (
        <>   
         {/* <Navbar options = {campaignData}/> */}
            <div className="container w-100 m-auto">            
                <div className="row d-flex">
                    {
                        cards ? cards.map(card =>
                            <div className="col-lg-4 col-md-4 col-sm-1 m-auto" key={card.title}>
                                <div className="card mb-4" key={card.id}>
                                    <img className="card-img-top" src={card.primaryMediaUrl} alt="Card image cap" />
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
                                        <div className="progress" style={{ height: "8px" }}>
                                            <div className="progress-bar" role="progressbar" ></div>
                                        </div>

                                    </div>
                                    <div className="card-footer text-muted d-flex text-center p-0" style={{ height: "35px" }}>
                                        <div className="col-4 basecolor">
                                            <FaDatabase className="icon-font mr-1" />
                                            <small>{card.listOfPlans[0].price.currencySymbol}</small>
                                            <small className="numbers">{card.listOfPlans[0].price.amount}</small>
                                        </div>
                                        <div className="col-4 text-center basecolor">
                                            <MdPeople className="icon-font mr-1" />
                                            <small className="numbers">{card.subscribers}</small>
                                        </div>
                                        <div className="col-4 basecolor text-right">
                                            <FaEye className="icon-font mr-1" />
                                            <small className="numbers">{card.views}k</small>
                                        </div>
                                    </div>
                                </div>
                            </div>) : []
                    }

                </div>
            </div>
        </>
    )
}

export default Cards
