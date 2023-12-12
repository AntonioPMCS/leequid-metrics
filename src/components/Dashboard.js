import { React, useState, useEffect } from 'react'
import { Utils } from '../utils/Utils';
import { CONSENSUS_API_URL} from '../utils/constants';
import LiquidityPool from './LiquidityPool/LiquidityPool';
import StakingPool from './StakingPool/StakingPool';
import useLYXPrice from '../utils/customHooks/useLYXPrice';
import { Stack } from '@mui/material';

const Dashboard = ({blockchain}) => {
  const [stakingAPR, setStakingAPR] = useState(null);
  const [leequidDominance, setLeequidDominance] = useState(null)
  const [sLYXSupply, setSLYXSupply] = useState(0n)
  const lyxPrice = useLYXPrice()

  async function fetchConsensusStats() {
    try {
      return fetch(`${CONSENSUS_API_URL}/api/v1/epoch/latest`)
        .then(response => { return response.json() })
    } catch (error) {
      console.log(error)
    }
  };

  async function fetchSLYXSupply() {
    
    try {
      return blockchain.getSLYX().totalSupply()
              .then((response) => {
                console.log(response)
                setSLYXSupply(response)
                return response;
              })
    } catch (error) {
      console.log(error)
    }
  };


  useEffect(() => {
    const init = async () => {
      const consensusStats = await fetchConsensusStats();
      const currentAPR = Utils.calculateStakingRewards({ totalAtStake: consensusStats.data.validatorscount * 32 });
      console.log(currentAPR + "%");
      setStakingAPR(currentAPR);
      const sLYXSupply = await fetchSLYXSupply()
      setLeequidDominance(Number(sLYXSupply * 10000n / (BigInt(consensusStats.data.validatorscount) * Utils.ethToWei('32'))) / 10000);
    }
    init();
  }, []);


  return (
    <div>
      {lyxPrice && sLYXSupply &&
        <Stack direction="row" spacing={3} marginBottom="15px">
          <p>LYX price: <strong>${lyxPrice.toLocaleString('en-US')}</strong></p>
          <p>sLYX Total Supply: <strong>{new Intl.NumberFormat('en-us').format(Number(Utils.weiToEth(sLYXSupply)))}</strong></p>
        </Stack>
         
      }
      {stakingAPR && leequidDominance &&
        <StakingPool  blockchain={blockchain} stakingAPR={stakingAPR} dominance={leequidDominance} lyxPrice={lyxPrice}/>
      }
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
