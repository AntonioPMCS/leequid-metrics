import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

const useStakingTVL = (lyxPrice, blockchain) => {
  const [stakingTVL, setTVL] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _poolBalance = await blockchain.getPool().getBalance();
        const _rewardBalance = await blockchain.getRewards().getBalance();
        const _validators =  (await blockchain.getPool().getActiveValidators()) + (await blockchain.getPool().getPendingValidators())
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
