import React from 'react';

const CampaignContext = React.createContext();

const CampaignProvider = CampaignContext.Provider;
const CampaignConsumer = CampaignContext.Consumer;


export { CampaignProvider, CampaignConsumer }