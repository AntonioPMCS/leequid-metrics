import React from 'react'
import RewardProvenanceChart from './RewardProvenanceChart';

const RewardProvenance = ({width, height}) => {

  const rewardProvenances = [
    {name: 'attestations', percentage: 90.9},
    {name: 'proposals', percentage: 6.1},
    {name: 'committee', percentage: 3},
  ]
  
  return (
    <div>
      <h3>Reward Provenance Chart</h3>
      <RewardProvenanceChart data={rewardProvenances} />
    </div>
  )
}

export default RewardProvenance
