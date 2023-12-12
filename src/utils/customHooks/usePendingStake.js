import {ethers} from 'ethers';
import { useEffect, useState} from 'react'
import { act } from 'react-dom/test-utils';

const usePendingStake = (blockchain) => {
  const [pendingStake, setPendingStake] = useState({activeValidators: "", pendingValidators: "", ratio: 0, poolBalance: 0});
  
  function calculatePendingRatio(_activeValidators, _pendingValidators, _poolBalance) {
    const validatorDepositSize = ethers.parseUnits("32", "ether")
    const unbornValidators =  _poolBalance / validatorDepositSize;
    return Number(((unbornValidators + _pendingValidators) * 100n) / _activeValidators) / 100
  }

  useEffect(() => {
    const fetchData = async () => {
      const _activeValidators = await blockchain.getPool().getActiveValidators()
      const _pendingValidators = await blockchain.getPool().getPendingValidators()
      const _poolBalance = await blockchain.getPool().getBalance()
      const _ratio = calculatePendingRatio(_activeValidators, _pendingValidators, _poolBalance);
      setPendingStake({
        activeValidators: _activeValidators, 
        pendingValidators: _pendingValidators,
        ratio: _ratio,
        poolBalance: _poolBalance
      })
    }
    fetchData();
  }, [])

  return pendingStake;
}

export default usePendingStake
