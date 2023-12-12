import { Contract } from './Contract';
import pairABI from './abi/pairABI';

export class Pair extends Contract {
   address = "0xB9ddaE8a609167472549f7A68425c47Dba3515EC";

   constructor (provider, ethers) {
      super(provider, ethers)
      this.contract = new ethers.BaseContract(this.address,
         pairABI,
         provider
      ); 
   }

}