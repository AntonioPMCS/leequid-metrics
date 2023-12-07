import {useState, useEffect} from 'react'
import * as d3 from 'd3'

const useRewardsProvenance = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    let rewardProvenances = [
      {name: 'attestations', percentage: 92.9},
      {name: 'proposals', percentage: 5.1},
      {name: 'committee', percentage: 2},
    ]
    const angleGen = d3.pie().value((d) => d.percentage);
    const sliceData = angleGen(rewardProvenances);
    setData(sliceData);
  }, [])

  return data;
  
}

export default useRewardsProvenance
