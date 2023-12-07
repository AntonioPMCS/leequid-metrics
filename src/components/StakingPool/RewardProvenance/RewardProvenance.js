import React from 'react'
import * as d3 from 'd3'
import useRewardsProvenance from '../../../utils/customHooks/useRewardsProvenance';
import RewardProvenanceSlice from './RewardProvenanceSlice';

const RewardProvenance = ({width, height}) => {

  const data = useRewardsProvenance();
  const colors = ["#98abc5", "#8a89a6", "#7b6888"]

  const arcPathGenerator = d3.arc();
  const padding = 40;
  return (
    <div>
      <h3>Reward Provenance Chart</h3>
      <svg width={width} height={height}>
        <g stroke="white" strokeWidth="1" strokeLinejoin="round" transform={`translate(${width/2}, ${height/2})`}>
          {console.log(data)}
          { data &&
            data.map((data, i) => {
              // console.log("Logging arc: ")
              // console.log(arcPathGenerator({innerRadius: 0, outerRadius: (width/2)-padding, startAngle: data.startAngle, endAngle: data.endAngle}))
              return <RewardProvenanceSlice 
                        key={i} 
                        color={colors[i]} 
                        arcPathGenerator={arcPathGenerator} 
                        outerRadius={(width/2)-padding} 
                        data={data}
                      />
            })
          }
        </g>
      </svg>
    </div>
  )
}

export default RewardProvenance
