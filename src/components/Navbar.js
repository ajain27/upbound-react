import React from 'react';
import '../styles/navbar.scss'
import { FaListUl } from 'react-icons/fa';
import cardData from '../model/cards/cards.json'
import { CampaignConsumer } from '../contexts/CampaignContext';

function Navbar() {

    function filterCards(e) {
        const filteredData = cardData.filter(cards => {
            return cards.campaignId === e.target.value
        })
        console.log(filteredData);
        return filteredData;
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
                                       return options.map(campaign => {
                                            console.log(campaign);
                                            return <option key={campaign.id} value={campaign.id}>{campaign.campaignName}</option>
                                        })
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
