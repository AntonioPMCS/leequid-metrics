function lpInterestRate (fee, tvl, volume) {
   if (tvl === 0) { return 0.00 }
   console.log("Volume: " + volume + "\nTVL: " + tvl + "\nFee: " + fee);
   console.log((fee*volume)/tvl)
   return (fee*volume)/tvl
}

export default lpInterestRate;