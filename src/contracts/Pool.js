import poolABI from './abi/poolABI';
import { Contract } from './Contract';

export class Pool extends Contract {
   address = "0x7B6D1201A9e98B16EFef58CC42afFeb8D805d120"
   pendingValidators;
   activeValidators;
   balance;

   constructor (provider, ethers) {
      super(provider, ethers)
      this.contract = new ethers.BaseContract(this.address,
         poolABI,
         provider
      ); 
   }

   async getActiveValidators() {
      if (!this.activeValidators) this.activeValidators = await this.contract.effectiveValidators();
      return this.activeValidators;
   }

   async getPendingValidators() {
      if (!this.pendingValidators) this.pendingValidators = await this.contract.pendingValidators();
      return this.pendingValidators;
 }

   async getFormattedRewardUpdates(days = 7) {
      return await this.getRewardUpdates(days);
   }

}