import React, { useState, useEffect } from 'react';
import '../styles/navbar.scss'
import { FaListUl } from 'react-icons/fa';
import { get } from '../adapters/index'
import { CampaignConsumer } from '../contexts/CampaignContext';

function Navbar({ setFilteredCards }) {

    const [cards, setCards] = useState([])

    useEffect(() => {
        setTimeout(()=> {
            getCards();
        }, 1000)
    }, [])

    const url = 'http://localhost:5000/cards';
    function getCards() {
        get(url).then(card => {
            setCards(card.data);
        })
    }

    function filterCards(e) {
        let filteredData;
        let cardData = cards;
        let selectedCampaign = e && e.target && e.target.value ? e.target.value : '';
        if (selectedCampaign === 'all') {
            filteredData = cardData;
            setFilteredCards(filteredData);
        } else {
            filteredData = cardData && cardData.filter(cards => {
                return cards.campaignId === selectedCampaign;
            })
            setFilteredCards(filteredData);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-color mt-2 mb-4">
                <div className="container">
                    <div className="row d-flex" style={{ "alignItems": "center" }}>
                        <div className="col">
                            <select className="dropdown p-2" onChange={filterCards}>
                                <CampaignConsumer>
                                    {
                                        (options) => {
                                            const campaigns = options.map(campaign => {
                                                return <option key={campaign.id} value={campaign.id}>{campaign.campaignName}</option>
                                            })
                                            return campaigns;
                                        }
                                    }
                                </CampaignConsumer>
                            </select>
                        </div>
                        <div className="col text-left">
                            <FaListUl />
                        </div>
                    </div>                  
                </div>
            </nav>
        </>
    )
}

export default Navbar
