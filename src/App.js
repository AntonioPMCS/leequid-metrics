import Dashboard from './components/Dashboard'
import { React, useState, useEffect } from 'react'
import './App.css';
import { Blockchain } from './utils/Blockchain';
import { PROVIDERADDRESS1, PROVIDERADDRESS2 } from './utils/constants';

function App() {
  const [blockchain, setBlockchain] = useState(null);
  const [providerOk, setProviderOk] = useState(0);

  useEffect(() => {
    const init = async () => {
      var providerAddresses = [PROVIDERADDRESS1, PROVIDERADDRESS2]
      var blockchain;
      for (const address of providerAddresses) {
        try {
          blockchain = new Blockchain(address);
          console.log(blockchain)
          await blockchain.testConnection();
          setProviderOk(1); // If this line runs, testConnection() didn't throw
          setBlockchain(blockchain)
        } catch (error) {
          console.error("Error connecting to the blockchain", error)
        }
        if (providerOk === 1) break;
      } 
    }
    init();
  }, []);


  return (
    providerOk ?  
      <div className="container">
        <h1>Welcome to the LEEQUID Metrics Page</h1>
        <Dashboard blockchain={blockchain}/>
      </div>
    :
    <h2>Error loading provider. Please make sure the address used points to a valid RPC node. </h2>
  );
}

export default App;
