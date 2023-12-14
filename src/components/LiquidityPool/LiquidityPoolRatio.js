import React, { useEffect, useState } from 'react'
import { PAIRADDRESS } from '../../utils/constants';

const LiquidityPoolRatio = ({blockchain}) => {

  const [balances, setBalances] = useState({sLYX: 0n, LYX:0n})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _LYXBalance = await blockchain.getWETH10().balanceOf(PAIRADDRESS)
        const _sLYXBalance = await blockchain.getSLYX().balanceOf(PAIRADDRESS)
        setBalances({sLYX: _sLYXBalance, LYX: _LYXBalance})
        console.log(Number(_LYXBalance * 1000000n / _sLYXBalance) / 1000000);
      } catch (error) {
        console.log(error)
      }                    
    };
    fetchData();
  }, [])

  const getRatioAsNumber = (tokenA, tokenB) => {
    if (tokenB == 0) return 0;
    return Number(tokenA * 1000000n / tokenB) / 1000000
  }

  return (
    <>
      <p>1 sLYX = <strong>{getRatioAsNumber(balances.sLYX, balances.LYX).toFixed(5)} LYX</strong></p>
      <p>1 LYX = <strong>{getRatioAsNumber(balances.LYX, balances.sLYX).toFixed(5)} sLYX</strong></p>
    </> 
  
  )
}

export default LiquidityPoolRatio
