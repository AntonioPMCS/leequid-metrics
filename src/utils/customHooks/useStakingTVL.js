import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

const useStakingTVL = (lyxPrice, blockchain) => {
  const [stakingTVL, setTVL] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _poolBalance = await blockchain.getPoolContract().getBalance();
        const _rewardBalance = await blockchain.getRewardsContract().getBalance();
        const _validators =  (await blockchain.getPoolContract().getActiveValidators()) + (await blockchain.getPoolContract().getPendingValidators())
        const _tvlWei = _poolBalance + _rewardBalance + _validators * ethers.parseUnits("32", "ether")
        const _tvlLyx = ethers.formatEther(_tvlWei);
        const _tvlDollar = _tvlLyx * lyxPrice;
        setTVL(_tvlDollar)
      } catch (error) {
        console.log(error)
      }                    
    };
    fetchData();
  }, [])



  return stakingTVL
}

export default useStakingTVL
