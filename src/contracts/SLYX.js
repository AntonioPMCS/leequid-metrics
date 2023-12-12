import sLYXABI from './abi/sLYXABI';
import {Utils} from '../utils/Utils';
import { Contract } from './Contract';

export class SLYX extends Contract {
   address = "0xDF9124ee97d7a8eB8fe845b6C6eE8a8D75B55a57";

   constructor (provider, ethers) {
      super(provider, ethers)
      this.contract = new ethers.BaseContract(this.address,
         sLYXABI,
         provider
      ); 
   }

   async totalSupply() {
      return await this.contract.totalSupply();
   }

   async balanceOf(address) {
      return this.contract.balanceOf(address);
   }
   

}