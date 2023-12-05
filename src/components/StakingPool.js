import { React, useEffect, useState } from 'react'
import { Utils } from '../utils/Utils';

const StakingPool = ({blockchain, lyxPrice, stakingAPR}) => {

   const [rewardUpdates, setRewardUpdates] = useState([]);
   //const [tvl, setTVL] = useState(0);

   async function fetchRewardUpdates() {
      try {
         let rewardUpdates = await blockchain.getRewardsContract().getRewardUpdates(14);
         let rewardUpdatesFormatted = rewardUpdates.map((log) => {
               let element = {}
               return log.getBlock().then(block => {
                  element.date = new Date(block.timestamp*1000); //adjust to miliseconds
                  element.amount = log.args[0];
                  element.newTotalRewards = log.args[1];
                  return element;
               })
            })
        setRewardUpdates(await Promise.all(rewardUpdatesFormatted));
      } catch (error) {
        console.log(error)
      }
    }

   useEffect(() => {
      const init = async () => {
         await fetchRewardUpdates();
      }
      init();
   }, []);

   return (
      <div>
         <h2>Staking Pool</h2>

         <h3>Reward Updates Table</h3>         
         {rewardUpdates.map(log => {
            console.log(log)
            return   <p>{`${
                        log.date.toLocaleTimeString('en-us', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}) }
                        | ${(Utils.weiToEth(log.amount)).toString()} LYX`}
                     </p>
         })}
         
      </div>
   )
}

export default StakingPool
