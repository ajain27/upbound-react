import Cards from './components/Cards';
import Navbar from './components/Navbar';
import { CampaignProvider } from './contexts/CampaignContext';
import campaignData from './model/campaigns/campaigns.json'

function App() {
  return (
    <div className="App">
      <CampaignProvider value={campaignData}>
         <Navbar/>
      </CampaignProvider>     
      <Cards/>
    </div>
  );
}

export default App;
