import sLYXABI from './abi/sLYXABI';
import {Utils} from '../utils/Utils';

export class SLYX {
   address = "0xDF9124ee97d7a8eB8fe845b6C6eE8a8D75B55a57";

   constructor (provider, ethers) {
      this.ethers = ethers;
      this.provider = provider;
      this.contract = new ethers.BaseContract(this.address,
         sLYXABI,
         provider
      ); 
   }

   async sLYXSupply() {
      return Utils.weiToEth(await this.contract.totalSupply());
   }
   

}