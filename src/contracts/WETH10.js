import Weth10ABI from './abi/Weth10ABI';

export class WETH10 {
   address = "0x6b6F4cb50e67adb082300b90Af49AF499D41d04E";

   constructor (provider, ethers) {
      this.ethers = ethers;
      this.provider = provider;
      this.contract = new ethers.BaseContract(this.address,
         Weth10ABI,
         provider
      ); 
   }

   async balanceOf(address) {
      return await this.contract.balanceOf(address);
   }
}