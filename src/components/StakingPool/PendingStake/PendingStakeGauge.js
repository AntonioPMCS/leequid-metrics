import { Box } from '@mui/material'
import React from 'react'
import Gauge from '../../Gauge'

const PendingStakeGauge = ({value,width,height}) => {
  console.log(value);
  return (
    <Box sx={{ width:width, height:height}} > 
      <Gauge value={value}/>
    </Box>
  )
}

export default PendingStakeGauge
