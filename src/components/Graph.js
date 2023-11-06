import React from 'react'
import functionPlot from 'function-plot'

const Graph = (props) => {
   
   const plot = () => {
      functionPlot({
         target: '#root',
         data: [{
            fn: props.sevenDayVolume.toString()
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
