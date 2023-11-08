import { ethers } from 'ethers';
import { PROVIDERADDRESS, PAIRADDRESS, SLOTSIN7DAYS, WETH10ADDRESS } from './constants'
import pairABI from '../contracts/abi/pairABI'
import Weth10ABI from '../contracts/abi/Weth10ABI';

export class Blockchain {
   provider = {}
   pair = {}

   constructor () {
      this.provider = new ethers.JsonRpcProvider(PROVIDERADDRESS)
      this.pair = new ethers.BaseContract(PAIRADDRESS,
                                                pairABI,
                                                this.provider
                                          );                                 
      this.weth10 = new ethers.BaseContract(WETH10ADDRESS,
         Weth10ABI,
         this.provider
      );
   }

   async tvl() {
      // THIS IS A SIMPLIFICATION OF THE TVL
      // To calculate the real TVL, one would have to consider the amounts
      // of both LYX and sLYX, convert to a common currency like dollar,
      // and sum the two.
      const pairSLYX = await this.pair.totalSupply();
      const pairAddress = await this.pair.getAddress();
      const pairLYX = await this.weth10.balanceOf(pairAddress);
      console.log("Total liquidity in the pool: " + ethers.formatUnits(pairSLYX + pairLYX, "ether") + " (sLYX + LYX)");
      return ethers.formatUnits(pairSLYX + pairLYX, "ether");
   }

   async sevenDayVolume() {
      var now;
      this.provider.getBlockNumber().then((result) => now = result);

      var sevenDayVolume = BigInt(0);
      await this.pair.queryFilter("Swap(address,uint,uint,uint,uint,address)")
                     .then(
                           ((result) => {
                              console.log("Found "+result.length+" total events.");
                              result.forEach((log) => {
                                 if (log.blockNumber > now - SLOTSIN7DAYS) {
                                       sevenDayVolume += log.args[1]+log.args[2]; //either sLYX or LYX
                                 }
                              })
                           })
                     )
         return sevenDayVolume;
      }


      // ----------------- Utility methods --------------------
      weiToEth(value) {
         return ethers.FixedNumber.fromValue(value, 18);
      }
}