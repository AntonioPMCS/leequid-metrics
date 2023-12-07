import { ethers } from "ethers";

export const Utils = {
   lpFeesAPR: function(fee, tvl, volume) {
      if (tvl === 0) { return 0.00 }
      console.log("Volume: " + volume + "\nTVL: " + tvl + "\nFee: " + fee);
      console.log((fee*volume)/tvl)
      return (fee*volume)/tvl
   },

   
   incentivesAPR: function(incentives, tvl) {
      return incentives/tvl
   },

   lpAprWithIncentives: function(fee, tvl, volume, incentives) {
      if (tvl === 0) { return 0.00 }
      console.log("Volume: " + volume + "\nTVL: " + tvl + "\nFee: " + fee + "\nIncentives: " + incentives);
      console.log(((fee*volume)+incentives)/tvl)
      return ((fee*volume)+incentives)/tvl
   },
   
   calculateStakingRewards: function({
      slotTimeInSec = 12,
      slotsInEpoch = 32,
      baseRewardFactor = 64,
      totalAtStake = 1_000_000, // LYX
      averageNetworkPctOnline = 0.95,
      vaildatorUptime = 0.99,
      validatorDeposit = 32, // LYX
      effectiveBalanceIncrement = 1_000_000_000, // gwei
      weightDenominator = 64,
      proposerWeight = 8,
    }) {
      // Calculate number of epochs per year
      const avgSecInYear = 31556908.8; // 60 * 60 * 24 * 365.242
      const epochPerYear = avgSecInYear / (slotTimeInSec * slotsInEpoch);
      const baseRewardPerIncrement =
        (effectiveBalanceIncrement * baseRewardFactor) / (totalAtStake * 10e8) ** 0.5;
      // Calculate base reward for full validator (in gwei)
      const baseGweiRewardFullValidator =
        ((validatorDeposit * 10e8) / effectiveBalanceIncrement) * baseRewardPerIncrement;
      // Calculate offline per-validator penalty per epoch (in gwei)
      // Note: Inactivity penalty is not included in this simple calculation
      const offlineEpochGweiPentalty =
        baseGweiRewardFullValidator * ((weightDenominator - proposerWeight) / weightDenominator);
      
      // Calculate online per-validator reward per epoch (in gwei)
      const onlineEpochGweiReward = baseGweiRewardFullValidator * averageNetworkPctOnline;
      // Calculate net yearly staking reward (in gwei)
      const reward = onlineEpochGweiReward * vaildatorUptime;
      const penalty = offlineEpochGweiPentalty * (1 - vaildatorUptime);
      const netRewardPerYear = epochPerYear * (reward - penalty);
   
      // Return net yearly staking reward percentage
      return netRewardPerYear / 10e8 / validatorDeposit;
    },

    weiToEth: function(valueInWei) {
      return ethers.FixedNumber.fromValue(valueInWei, 18);
    },

    weiToEthString: function(valueInWei) {
      return ethers.formatEther(valueInWei)
    }

}




