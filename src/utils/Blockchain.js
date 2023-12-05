import { ethers } from 'ethers';
import { PROVIDERADDRESS, PAIRADDRESS, SLOTSIN7DAYS } from './constants'
import pairABI from '../contracts/abi/pairABI'

import {Rewards} from '../contracts/Rewards'
import {SLYX} from '../contracts/SLYX'
import {WETH10} from '../contracts/WETH10'

export class Blockchain {
   Rewards;
   WETH10;
   SLYX;
   provider = {}
   pair = {}

   constructor () {
      this.provider = new ethers.JsonRpcProvider(PROVIDERADDRESS);

      this.pair = new ethers.BaseContract(PAIRADDRESS,
                                                pairABI,
                                                this.provider
                                          );           
   }

   getRewardsContract() {
      if (this.Rewards) return this.Rewards;
      return this.Rewards = new Rewards(this.provider, ethers)
   }
   getWETH10Contract() {
      if (this.WETH10) return this.WETH10;
      return this.WETH10 = new WETH10(this.provider, ethers)
   }
   getSLYXContract() {
      if (this.SLYX) return this.SLYX;   
      return this.SLYX = new SLYX(this.provider, ethers)
   }



   async tvl() {
      // THIS IS A SIMPLIFICATION OF THE TVL
      // To calculate the real TVL, one would have to consider the amounts
      // of both LYX and sLYX, convert to a common currency like dollar,
      // and sum the two.
      const pairSLYX = await this.pair.totalSupply();
      const pairAddress = await this.pair.getAddress();
      const pairLYX = await this.getWETH10Contract().balanceOf(pairAddress);
      console.log("Total liquidity in the pool: " + ethers.formatUnits(pairSLYX + pairLYX, "ether") + " (sLYX + LYX)");
      return ethers.formatUnits(pairSLYX + pairLYX, "ether");
   }

   async tvl2() {
      //await this.pair.queryFilter("Swap(address,uint,uint,uint,uint,address)")
   }

   async sevenDayVolume() {
      var now;
      this.provider.getBlockNumber().then((result) => now = result);

      var sevenDayVolume = BigInt(0);
      await this.pair.queryFilter("Swap(address,uint,uint,uint,uint,address)")
                     .then(
                           ((result) => {
                              console.log("Found "+result.length+" total events.");
                              let i = 0;
                              result.forEach((log) => {
                                 if (log.blockNumber > now - SLOTSIN7DAYS) {
                                    i++;
                                    sevenDayVolume += log.args[1]+log.args[2]; //either sLYX or LYX
                                 }
                              })
                              console.log(i + "events where counted for the sevenDayVolume")
                           })
                     )
         return sevenDayVolume;
      }


      // ----------------- Utility methods --------------------

      minutesSinceBlock(blockNo) {
         return 1;
      }
}