import React, {useState, useEffect} from 'react'
import {DataGrid} from '@mui/x-data-grid'
import {Box} from '@mui/material'

const RewardUpdates = ({blockchain, weiToEth}) => {
   const [rewardUpdates, setRewardUpdates] = useState();

   async function fetchRewardUpdates() {
      try {
         let rewardUpdates = await blockchain.getRewardsContract().getRewardUpdates(14);
         let i = 0;
         let rewardUpdatesFormatted = rewardUpdates.map((log) => {
               let element = {}
               return log.getBlock().then(block => {
                  element.id=i++;
                  element.date = (new Date(block.timestamp*1000))
                  .toLocaleTimeString('en-us', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}); //adjust to miliseconds
                  element.amount = new Intl.NumberFormat('en-us').format(weiToEth(log.args[0])*1);
                  //(weiToEth(log.args[0])*1).toFixed(2);
                  element.newTotalRewards = new Intl.NumberFormat('en-us').format(weiToEth(log.args[1])*1)
                  //weiToEth(log.args[1])*1).toFixed(2);
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
         console.log(rewardUpdates)
      }
      init();
   }, []);

   return (
      <Box sx={{ width:550, height:370, marginBottom:5}} >
         <h3>Reward Updates Table</h3> 
         {rewardUpdates &&
         <DataGrid
            rows={rewardUpdates}
            columns={[
               {field: 'date', headerName: 'Date', width:200}, 
               {field: 'amount', headerName: 'Amount (LYX)', width:150}, 
               {field: 'newTotalRewards', headerName: 'Total Rewards (LYX)', width:150}]
            }
            initialState={{
               pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
               },
            }}
            pageSizeOptions={[5]}
         />   
      }  
      </Box>
   )
}

export default RewardUpdates
