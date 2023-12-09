import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

const RewardProvenanceChart = ({data}) => {

  const formattedData = data.map((data, i) => {
    return {id:i, value: data.percentage, label: data.name}
  })

  return (
    <PieChart
      series={[
        {
          data: formattedData,
          paddingAngle: 2,
          cornerRadius: 2
        },
      ]}
      width={400}
      height={200}
    />
  )
}

export default RewardProvenanceChart
