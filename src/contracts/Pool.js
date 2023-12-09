import poolABI from './abi/poolABI';

export class Pool {
   address = "0x7B6D1201A9e98B16EFef58CC42afFeb8D805d120"
   constructor (provider, ethers) {
      this.provider = provider;
      this.ethers = ethers;
      this.contract = new ethers.BaseContract(this.address,
         poolABI,
         provider
      ); 
   }

   async getActiveValidators() {
      return await this.contract.effectiveValidators();
   }

   async getPendingValidators() {
    return await this.contract.pendingValidators();
 }

   async getFormattedRewardUpdates(days = 7) {
      return await this.getRewardUpdates(days);
   }



}