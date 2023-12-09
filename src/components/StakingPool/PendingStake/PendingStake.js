import React from 'react'
import PendingStakeGauge from './PendingStakeGauge'
import { Stack } from '@mui/material'
import useCountValidators from '../../../utils/customHooks/useCountValidators'

const PendingStake = ({blockchain, width, height}) => {
  const [activeValidators, pendingValidators] = useCountValidators(blockchain);

  return (
    <div>
    <h3>Pending Stake</h3> 
    <Stack direction="row" spacing={3} marginBottom="15px">
      <p>Active validators: <strong>{activeValidators ? activeValidators.toString() : "loading..."}</strong></p>
      <p>Pending validators: <strong>{pendingValidators? pendingValidators.toString() : "loading..."}</strong></p>
    </Stack>
    {activeValidators && pendingValidators &&
      <PendingStakeGauge 
        value = {Number(((pendingValidators * 100n) / activeValidators))/100} 
        width={width} 
        height={height}/>
    }
    </div>

  )
}

export default PendingStake
