import { Contract } from './Contract';
import Weth10ABI from './abi/Weth10ABI';

export class WETH10 extends Contract {
   address = "0x6b6F4cb50e67adb082300b90Af49AF499D41d04E";

   constructor (provider, ethers) {
      super(provider, ethers)
      this.contract = new ethers.BaseContract(this.address,
         Weth10ABI,
         provider
      ); 
   }

   async balanceOf(address) {
      return this.contract.balanceOf(address);
   }
}