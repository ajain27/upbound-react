import React, { useState } from 'react'
import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { CampaignProvider } from './contexts/CampaignContext';
import campaignData from './model/campaigns/campaigns.json'
import cardData from './model/cards/cards.json'

function App() {
  const [filteredCards, setFilteredCards] = useState(cardData);
  return (
    <div className="App">
      <CampaignProvider value={campaignData}>
        <Navbar setFilteredCards={setFilteredCards} />
      </CampaignProvider>
      <Cards filteredCards={filteredCards}/>
    </div>
  );
}

export default App;
