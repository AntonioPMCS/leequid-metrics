import { React, useState, useEffect } from 'react'
import { Utils } from '../utils/Utils';
import { CONSENSUS_API_URL, COINGECKO_API_URL, COINGECKO_LYX_ID, COINGECKO_CURRENCY } from '../utils/constants';
import LiquidityPool from './LiquidityPool';
import StakingPool from './StakingPool';
import Stack from '@mui/material/Stack';

const Dashboard = ({blockchain}) => {
  const [lyxPrice, setLyxPrice] = useState(0)
  const [stakingAPR, setStakingAPR] = useState(0)
  const [leequidDominance, setLeequidDominance] = useState(0)


  async function fetchPrice() {
    try {
      return fetch(`${COINGECKO_API_URL}/simple/price?ids=${COINGECKO_LYX_ID}&vs_currencies=${COINGECKO_CURRENCY}`)
        .then(response => response.json())
        .then((data) => { 
          console.log(data);
          console.log("LYX price: " + data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
          setLyxPrice(data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchConsensusStats() {
    try {
      return fetch(`${CONSENSUS_API_URL}/api/v1/epoch/latest`)
        .then(response => { return response.json() })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const init = async () => {
      await fetchPrice();
      const consensusStats = await fetchConsensusStats();
      const currentAPR = Utils.calculateStakingRewards({ totalAtStake: consensusStats.data.validatorscount * 32 });
      console.log(currentAPR + "%");
      setStakingAPR(currentAPR);

      const sLYXSupply = await blockchain.getSLYXContract().sLYXSupply();
      setLeequidDominance(sLYXSupply / (consensusStats.data.validatorscount * 32));
      
    }
    init();
  }, []);


  return (
    <div>

      <Stack direction="row" spacing={3} marginBottom="15px">
        <p>Staking APR: <strong>{(stakingAPR*100).toFixed(2)}%</strong></p> 
        <p>LYX price: <strong>${lyxPrice.toLocaleString('en-US')}</strong></p> 
        <p>LEEQUID Network share: <strong>{(leequidDominance*100).toFixed(2)}%</strong></p> 
      </Stack>

      <StakingPool blockchain={blockchain} />

        { lyxPrice && stakingAPR &&
          <LiquidityPool 
            blockchain={blockchain} 
            lyxPrice={lyxPrice}
            stakingAPR={stakingAPR}
          />
        }
    </div>
  )
}

export default Dashboard
