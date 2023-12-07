import { React, useState, useEffect } from 'react'
import { Utils } from '../../utils/Utils';
import Controls from './Controls'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LPFEE } from '../../utils/constants';

const LiquidityPool = ({blockchain, lyxPrice, stakingAPR}) => {

   const [initialSevenDayVolume, setInitialSevenDayVolume] = useState(0);
   const [sevenDayVolume, setSevenDayVolume] = useState(0);

   const [initialTvl, setInitialTVL] = useState(0);
   const [tvl, setTVL] = useState(0);

   const [incentives, setIncentives] = useState(1)
   const [initialIncentives, setInitialIncentives] = useState(1);

   const [lpFeesAPR, setLPFeesAPR] = useState(0)
   const [incentivesAPR, setIncentivesAPR] = useState(0)

   async function fetchData(lyxPrice) {
      try {
        let sevenDayVolume = await blockchain.sevenDayVolume();
        setInitialSevenDayVolume((Utils.weiToEth(sevenDayVolume)*lyxPrice));
        setSevenDayVolume((Utils.weiToEth(sevenDayVolume)*lyxPrice));
        let tvl = await blockchain.tvl();
        setInitialTVL(Math.floor(tvl)*lyxPrice);
        setTVL(Math.floor(tvl)*lyxPrice)
  
        setLPFeesAPR(Utils.lpFeesAPR(LPFEE, Math.floor(tvl), Math.floor(Utils.weiToEth(sevenDayVolume))));
        setIncentivesAPR(Utils.incentivesAPR(incentives, tvl))
        
      } catch (error) {
        console.log(error);
      }
   }

   useEffect(() => {
      const init = async () => {
         console.log("Lyx Price: " + lyxPrice)
         await fetchData(lyxPrice);
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
         <Box component="section">
         <Container sx={{ 'borderBottom': 'dashed red' }}>
            <h2>SLYX-LYX Pair</h2>
            <Stack 
             direction="row" 
             spacing={3} 
            >
               <p>1 sLYX = 1.00303 LYX</p>
               <p>1 LYX = 0.99697 sLYX</p>
               <Button variant='filled' size='small' onClick={handleRestoreButton} >
                  🔄 restore current values
               </Button>
            </Stack>
         </Container>
         <Stack 
            direction={{xs:'column', sm:'column', md:'row'}} 
            spacing={3}
         > 
            { sevenDayVolume && 
               <Controls 
               title="7Day Volume" 
               defaultValue={initialSevenDayVolume}
               value={sevenDayVolume}
               max={200000}
               unit="$"
               handler={handleVolumeChanged} 
               /> 
            }
            {  tvl &&
               <Controls   
               title="TVL" 
               defaultValue={initialTvl} 
               value={tvl}
               max={1500000}
               unit="$"
               handler={handleTVLChanged} 
               />
            } 
            { incentives && 
               <Controls   
               title="Annual Incentives" 
               defaultValue={initialIncentives} 
               value={incentives}
               max={500000}
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
      </div>
   )
   }

export default LiquidityPool
