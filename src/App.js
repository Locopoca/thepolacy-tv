import React from 'react';
import { WagmiConfig } from 'wagmi';
import Card from './components/Card';
import config from './config'; // Assuming config is extracted into a separate file

const App = () => {
  return (
    <WagmiConfig config={config}>
      <Card />
    </WagmiConfig>
  );
};

export default App;