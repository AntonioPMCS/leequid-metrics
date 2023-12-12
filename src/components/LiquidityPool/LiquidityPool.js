import { React, useState, useEffect } from 'react'
import { Utils } from '../../utils/Utils';
import Controls from './Controls'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LPFEE } from '../../utils/constants';
import LiquidityPoolRatio from './LiquidityPoolRatio';

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
        setTVL(tvl*lyxPrice)
  
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

   return (
      <div>
         <Box component="section">
         <Container sx={{ 'borderBottom': 'dashed red' }}>
            <h2>SLYX-LYX Pair</h2>
            <Stack direction="row" spacing={3} marginBottom="15px">
               <LiquidityPoolRatio blockchain={blockchain}/>
               <p>SevenDayVolume: <strong>${new Intl.NumberFormat('en-us').format(sevenDayVolume)}</strong></p> 
               <p>TVL: <strong>${new Intl.NumberFormat('en-us').format(tvl)}</strong></p> 
            </Stack>
            
         </Container>
         <Stack 
            direction={{xs:'column', sm:'column', md:'row'}} 
            spacing={3}
         > 
         </Stack>
         { tvl && sevenDayVolume && incentives &&
            <Stack direction='column'>
               <h3>Total APR of a Liquidity Provider: {((lpFeesAPR + incentivesAPR + stakingAPR/2)*100).toFixed(2)}%</h3>
               <h3>APR Breakdown</h3>
               <Stack direction={'row'} spacing={3}>
               <h4>Liquidity Fees: {(lpFeesAPR*100).toFixed(2)}%</h4>
               <h4>Incentives: {(incentivesAPR*100).toFixed(2)}%</h4> 
               <h4>Staking: {((stakingAPR*100)/2).toFixed(2)}%</h4> 
               </Stack>
               
            </Stack>
         }
         </Box>
      </div>
   )
   }

export default LiquidityPool
