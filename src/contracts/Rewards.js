import rewardsABI from './abi/rewardsABI';
import { SLOTSIN1DAY } from '../utils/constants';
import { Contract } from './Contract';

export class Rewards extends Contract {
   address = "0x5D48F7FC221ABcAC5386c374eF723a56AD03D4B4"
   constructor (provider, ethers) {
      super(provider, ethers)
      this.contract = new ethers.BaseContract(this.address,
         rewardsABI,
         provider
      ); 
   }

   async getRewardUpdates(days = 7) {
      /* event RewardsUpdated(
        uint256 periodRewards,
        uint256 totalRewards,
        uint256 feesCollected,
        uint256 rewardPerToken,
        uint256 distributorReward,
        uint256 protocolReward
    );*/

      var now = await this.provider.getBlockNumber();

      return (await this.contract.queryFilter("RewardsUpdated(uint256,uint256,uint256,uint256,uint256,uint256)")
            .then((result) => {
                  return result.filter((log) => {
                     return (log.blockNumber > now - SLOTSIN1DAY*days);
                  })  
            })).reverse()
   }

   async getFormattedRewardUpdates(days = 7) {
      return await this.getRewardUpdates(days);
      // return logs.map((log) => {
      //    let element = {}
      //    return log.getBlock().then(block => {
      //       element.date = new Date(block.timestamp*1000); //adjust to miliseconds
      //       element.amount = log.args[0];
      //       element.newTotalRewards = log.args[1];
      //       return element;
      //    })
        
      // })
   }

}