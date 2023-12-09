import React from 'react'
import { arc, scaleLinear } from 'd3'

const innerRadius = 0.85;

const Gauge = ({value=0.07, min=0, max=100, label, units}) => {
  console.log(value)

  if ((value > 1) || (value < 0)) {
    return <p>Error. The value provided to the Gauge should be between 0 and 1</p>
  }
  const gaugeArc= (endAngle = Math.PI / 1.5) => {
    return arc()
    .innerRadius(innerRadius)
    .outerRadius(1)
    .startAngle(-Math.PI / 1.5)
    .endAngle(endAngle)
    .cornerRadius(0.1)()
  } 

  const angleScale = scaleLinear()
    .domain([0,0.5])
    .range([-Math.PI / 1.5, Math.PI / 1.5])
    .clamp(true)
  
  const angle = angleScale(value)
  console.log(angle)

  const getCoordsOnArc = (angle, offset=10) => [
    Math.cos(angle - (Math.PI / 2)) * offset,
    Math.sin(angle - (Math.PI / 2)) * offset,
  ]

  const markerLocation = getCoordsOnArc(
    angle,
    1 - ((1 - innerRadius) / 2),
  )

  return (
      <svg 
        width="20em" 
        viewBox={[-1, -1, 2, 2,].join(" ")} 
        style={{border:"1px solid pink"}}
      >
        <path d={gaugeArc()} fill="#dbdbe7" />
        <path d={gaugeArc(angle)} fill="#9980FA" />
        <path 
          transform={`rotate(${angle * (180 / Math.PI)})`} 
          d="M0,0,0,-1" 
          strokeWidth="0.03" 
          stroke="white"
        />
        <circle
          cx={markerLocation[0]}
          cy={markerLocation[1]}
          r="0.1"
          stroke="#2c3e50"
          strokeWidth="0.01"
          fill={"#9980FA"}
        />
      </svg>
  )
}

export default Gauge
