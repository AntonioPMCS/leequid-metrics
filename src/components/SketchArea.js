import { React, useState, useEffect } from 'react'
import Controls from './Controls'
import Graph from './Graph';
import { Utils } from '../utils/Utils';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LPFEE, CONSENSUS_API_URL, COINGECKO_API_URL, COINGECKO_LYX_ID, COINGECKO_CURRENCY } from '../utils/constants';

const SketchArea = (props) => {
  const [initialSevenDayVolume, setInitialSevenDayVolume] = useState(0);
  const [sevenDayVolume, setSevenDayVolume] = useState(0);

  const [initialTvl, setInitialTVL] = useState(0);
  const [tvl, setTVL] = useState(0);

  const [incentives, setIncentives] = useState(1)
  const [initialIncentives, setInitialIncentives] = useState(1);

  const [lpFeesAPR, setLPFeesAPR] = useState(0)
  const [incentivesAPR, setIncentivesAPR] = useState(0)
  const [stakingAPR, setStakingAPR] = useState(0)


  async function fetchPrice() {
    try {
      return fetch(`${COINGECKO_API_URL}/simple/price?ids=${COINGECKO_LYX_ID}&vs_currencies=${COINGECKO_CURRENCY}`)
        .then(response => response.json())
        .then((data) => { 
          console.log(data);
          console.log("LYX price: " + data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
          return data[COINGECKO_LYX_ID][COINGECKO_CURRENCY]
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchStakingAPR() {
    try {
      return fetch(`${CONSENSUS_API_URL}/api/v1/epoch/latest`)
        .then(response => response.json())
        .then((data) => { 
          const currentAPR = Utils.calculateStakingRewards({ totalAtStake: data.data.validatorscount * 32 });
          console.log(currentAPR + "%");
          setStakingAPR(currentAPR);
          return currentAPR
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchData(lyxPrice) {
    try {
      let sevenDayVolume = await props.blockchain.sevenDayVolume();
      setInitialSevenDayVolume((props.blockchain.weiToEth(sevenDayVolume)*lyxPrice));
      setSevenDayVolume((props.blockchain.weiToEth(sevenDayVolume)*lyxPrice));
      let tvl = await props.blockchain.tvl();
      setInitialTVL(Math.floor(tvl)*lyxPrice);
      setTVL(Math.floor(tvl)*lyxPrice)

      setLPFeesAPR(Utils.lpFeesAPR(LPFEE, Math.floor(tvl), Math.floor(props.blockchain.weiToEth(sevenDayVolume))));
      setIncentivesAPR(Utils.incentivesAPR(incentives, tvl))
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const init = async () => {
      const lyxPrice = await fetchPrice();
      await fetchData(lyxPrice);
      await fetchStakingAPR();
    }
    init();
  }, []);

  const handleVolumeChanged = (event) => { 
    event.preventDefault()
    console.log("HandleVOLUMEChanged")
    setSevenDayVolume(event.target.value);
    setLPFeesAPR(Utils.lpFeesAPR(LPFEE, tvl, event.target.value))
  }
  const handleTVLChanged = (event) => { 
    event.preventDefault()
    console.log("HandleTVLChanged")
    setTVL(event.target.value); 
    setLPFeesAPR(Utils.lpFeesAPR(LPFEE, event.target.value, sevenDayVolume))
    setIncentivesAPR(Utils.incentivesAPR(incentives, tvl))
  }

  const handleIncentivesChanged = (event) => { 
    event.preventDefault()
    console.log("HandleIncentivesChanged")
    setIncentives(event.target.value); 
    setIncentivesAPR(Utils.incentivesAPR(event.target.value, tvl))
    // REMOVE this linesetLPApr(lpAprWithIncentives(LPFEE, tvl, sevenDayVolume, event.target.value))
  }

  const handleRestoreButton = (event) => {
    event.preventDefault()
    console.log("HandleRestoreButton")
    setIncentives(initialIncentives)
    setSevenDayVolume(initialSevenDayVolume)
    setTVL(initialTvl)
    setLPFeesAPR(Utils.lpFeesAPR(LPFEE, initialTvl, initialSevenDayVolume));
    setIncentivesAPR(Utils.incentivesAPR(initialIncentives, tvl));
  }

  return (
    <div>
      <h3>Current staking APR: {(stakingAPR*100).toFixed(2)}%</h3>
      <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
        <Container sx={{ 'borderBottom': 'dashed red' }}>
          <Stack direction="row" spacing={3}>
            <h2>sLYX - LYX Liquidity Pool</h2>
            <Button 
              variant='filled' 
              size='small' 
              onClick={handleRestoreButton} >🔄 restore current values</Button>
          </Stack>
          
        </Container>
        <Stack direction='row' spacing={3}> 
          { sevenDayVolume && 
            <Controls 
              title="7Day Volume" 
              defaultValue={initialSevenDayVolume}
              value={sevenDayVolume}
              unit="$"
              handler={handleVolumeChanged} 
            /> 
          }
          {  tvl &&
            <Controls   
            title="TVL" 
            defaultValue={initialTvl} 
            value={tvl}
            unit="$"
            handler={handleTVLChanged} 
            />
          } 
          { incentives && 
            <Controls   
            title="Annual Incentives" 
            defaultValue={initialIncentives} 
            value={incentives}
            max={99999}
            unit="$"
            handler={handleIncentivesChanged} 
            />
          }
        </Stack>
        { tvl && sevenDayVolume && incentives &&
          <Stack direction='column'>
            <h2>APR Breakdown</h2>
            <Stack direction={'row'} spacing={3}>
              <h3>Liquidity Fees: {(lpFeesAPR*100).toFixed(2)}%</h3>
              <h3>Incentives: {(incentivesAPR*100).toFixed(2)}%</h3> 
              <h3>Staking: {((stakingAPR*100)/2).toFixed(2)}%</h3> 
            </Stack>
            <h2>Total APR of a Liquidity Provider: {((lpFeesAPR + incentivesAPR + stakingAPR/2)*100).toFixed(2)}%</h2>
          </Stack>
        }

      </Box>
      

      
      <Graph sevenDayVolume={sevenDayVolume} />
    </div>
  )
}

export default SketchArea
