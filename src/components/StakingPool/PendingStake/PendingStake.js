import React from 'react'
import PendingStakeGauge from './PendingStakeGauge'
import { Stack } from '@mui/material'
import usePendingStake from '../../../utils/customHooks/usePendingStake'

const PendingStake = ({blockchain}) => {
  const pendingStake = usePendingStake(blockchain);
  console.log(pendingStake)

  return (
    <div>
    <h3>Pending Stake</h3>  
      <Stack direction="row" spacing={3}>
        <p>Active validators: <strong>{pendingStake.activeValidators ? pendingStake.activeValidators.toString() : "loading..."}</strong></p>
        <p>Pending validators: <strong>{pendingStake.pendingValidators === null ? "loading..." : pendingStake.pendingValidators.toString()}</strong></p>
      </Stack> 
      <p>Current dilution: <strong>{pendingStake.ratio}%</strong></p>
        <PendingStakeGauge 
          value = {pendingStake.ratio} 
        />
    </div>

  )
}

export default PendingStake
