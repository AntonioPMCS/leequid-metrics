import { ethers } from 'ethers';
import { SLOTSIN7DAYS } from './constants'

import {Rewards} from '../contracts/Rewards'
import {SLYX} from '../contracts/SLYX'
import {WETH10} from '../contracts/WETH10'
import {Pool} from '../contracts/Pool'
import {Pair} from '../contracts/Pair';

export class Blockchain {
   Rewards;
   WETH10;
   SLYX;
   Pool;
   Pair;
   provider = {}

   constructor (_providerAddress) {
      this.provider = new ethers.JsonRpcProvider(_providerAddress); 
   }

   async testConnection() {
      return await this.provider._getConnection().send();
   }

   getPool() {
      if (this.Pool) return this.Pool;
      return this.Pool = new Pool(this.provider, ethers)
   }
   getRewards() {
      if (this.Rewards) return this.Rewards;
      return this.Rewards = new Rewards(this.provider, ethers)
   }
   getWETH10() {
      if (this.WETH10) return this.WETH10;
      return this.WETH10 = new WETH10(this.provider, ethers)
   }
   getSLYX() {
      if (this.SLYX) return this.SLYX;   
      return this.SLYX = new SLYX(this.provider, ethers)
   }
   getPair() {
      if (this.Pair) return this.Pair;   
      return this.Pair = new Pair(this.provider, ethers)
   }
   
   getProvider() {
      console.log(this.provider)
      return this.provider;
   }

   async tvl() {
      // THIS IS A SIMPLIFICATION OF THE TVL
      // To calculate the real TVL, one would have to consider the amounts
      // of both LYX and sLYX, convert to a common currency like dollar,
      // and sum the two.
      const pairSLYX = await this.getSLYX().balanceOf(this.getPair().getAddress());
      const pairLYX = await this.getWETH10().balanceOf(this.getPair().getAddress());
      console.log("Total liquidity in the pool: " + ethers.formatUnits(pairSLYX + pairLYX, "ether") + " (sLYX + LYX)");
      return ethers.formatUnits(pairSLYX + pairLYX, "ether");
   }

   async sevenDayVolume() {
      var now;
      this.provider.getBlockNumber().then((result) => now = result);

      var sevenDayVolume = BigInt(0);
      await this.getPair().getContract().queryFilter("Swap(address,uint,uint,uint,uint,address)")
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
}