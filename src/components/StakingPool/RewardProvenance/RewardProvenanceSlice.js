import React from 'react'
import { Tooltip } from '@mui/material'


const RewardProvenanceSlice = ({color,arcPathGenerator,outerRadius,data}) => {
  return (
    <Tooltip title="PieSlice" placement="top">
      <path
            d = {arcPathGenerator({innerRadius: 0, outerRadius: outerRadius, startAngle: data.startAngle, endAngle: data.endAngle})}
            fill = {color}
      />
    </Tooltip>
  )
}

export default RewardProvenanceSlice
