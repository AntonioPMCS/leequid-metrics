import { Container } from '@mui/material'
import React from 'react'
import Gauge from '../../Gauge'

const PendingStakeGauge = ({value}) => {

  return (
    <Container maxWidth="sm">
      <Gauge value={value} label="Dilution" />
    </Container>
  )
}

export default PendingStakeGauge
