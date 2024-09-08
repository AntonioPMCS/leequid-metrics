import React from 'react'
import { Utils } from '../../utils/Utils';
import RewardUpdates from './RewardUpdates/RewardUpdates';
import RewardProvenance from './RewardProvenance/RewardProvenance';
import {Box, Stack} from '@mui/material'
import PendingStake from './PendingStake/PendingStake';
import useStakingTVL from '../../utils/customHooks/useStakingTVL';
import useLYXPrice from '../../utils/customHooks/useLYXPrice';

const StakingPool = ({blockchain, stakingAPR, dominance, lyxPrice}) => {
   const stakingTVL = useStakingTVL(lyxPrice, blockchain)

   return (
      <Box component="section" sx={{marginBottom: "100px"}} >
         <h2>LEEQUID Staking Pool</h2>
         <Stack direction="row" spacing={3} marginBottom="15px">
            <p>Staking APR: <strong>{(stakingAPR*100).toFixed(2)}%</strong></p> 
            <p>LEEQUID Network share: <strong>{(dominance*100).toFixed(2)}%</strong></p> 
            <p>TVL: <strong>${Intl.NumberFormat('en-us').format(stakingTVL)}</strong></p>
         </Stack>
         <Stack direction="row" spacing={3}>
            <RewardUpdates 
               blockchain={blockchain} 
               weiToEth={Utils.weiToEth}
               width={500}
               height={370}
             /> 
            <PendingStake 
               blockchain={blockchain}
               width={500}
               height={370}
                />
         </Stack>   
         {//<RewardProvenance width={400} height={400}/>  
         }
      </Box>
   )
}

export default StakingPool
