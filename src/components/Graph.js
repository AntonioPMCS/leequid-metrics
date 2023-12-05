import React from 'react'
import functionPlot from 'function-plot'

const Graph = ({sevenDayVolume}) => {
   
   const plot = () => {
      functionPlot({
         target: '#root',
         data: [{
            fn: sevenDayVolume.toString()
         }]
   
      })
   }
   
  return (
    <div>
      {plot()}     
    </div>
  )
}

export default Graph
