import { React, useState, useEffect } from 'react'
import Controls from './Controls'
import Graph from './Graph';
import lpInterestRate from '../utils/math';
import Stack from '@mui/material/Stack';
import { LPFEE, COINGECKO_API_URL, COINGECKO_LYX_ID, COINGECKO_CURRENCY } from '../utils/constants';

const SketchArea = (props) => {
  const [initialSevenDayVolume, setInitialSevenDayVolume] = useState(0);
  const [sevenDayVolume, setSevenDayVolume] = useState(0);

  const [initialTvl, setInitialTVL] = useState(0);
  const [tvl, setTVL] = useState(0);

  const [incentives, setIncentives] = useState(1000)
  const [initialIncentives, setInitialIncentives] = useState(1000);

  const [lpApr, setLPApr] = useState(0)

  async function fetchPrice() {
    try {
      return fetch(`${COINGECKO_API_URL}/simple/price?ids=${COINGECKO_LYX_ID}&vs_currencies=${COINGECKO_CURRENCY}`)
        .then(response => response.json())
        .then((data) => { 
          console.log(data);
          console.log("LYX price: " + data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
          return data[COINGECKO_LYX_ID][COINGECKO_CURRENCY]
        })
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchData(lyxPrice) {
    try {
      let sevenDayVolume = await props.blockchain.sevenDayVolume();
      setInitialSevenDayVolume((props.blockchain.weiToEth(sevenDayVolume)*lyxPrice));
      setSevenDayVolume((props.blockchain.weiToEth(sevenDayVolume)*lyxPrice));
      let tvl = await props.blockchain.tvl();
      setInitialTVL(Math.floor(tvl)*lyxPrice);
      setTVL(Math.floor(tvl)*lyxPrice)
      setLPApr(lpInterestRate(LPFEE, Math.floor(tvl), Math.floor(props.blockchain.weiToEth(sevenDayVolume))))
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const init = async () => {
      const lyxPrice = await fetchPrice();
      await fetchData(lyxPrice);
    }
    init();
  }, []);

  const handleVolumeChanged = (event) => { 
    event.preventDefault()
    console.log("HandleVOLUMEChanged")
    setSevenDayVolume(event.target.value);
    setLPApr(lpInterestRate(LPFEE, tvl, event.target.value))
  }
  const handleTVLChanged = (event) => { 
    event.preventDefault()
    console.log("HandleTVLChanged")
    setTVL(event.target.value); 
    setLPApr(lpInterestRate(LPFEE, event.target.value, sevenDayVolume))
  }

  const handleIncentivesChanged = (event) => { 
    event.preventDefault()
    console.log("HandleIncentivesChanged")
    setIncentives(event.target.value); 
    setLPApr(lpInterestRate(LPFEE, event.target.value, sevenDayVolume))
  }

  return (
    <div>
      <Stack direction='row' spacing={3}>
        { initialSevenDayVolume && 
          <Controls 
            title="7Day Volume" 
            defaultValue={initialSevenDayVolume}
            value={sevenDayVolume}
            unit="$"
            handler={handleVolumeChanged} 
          /> 
        }
        { initialTvl && 
          <Controls   
          title="TVL" 
          defaultValue={initialTvl} 
          value={tvl}
          unit="$"
          handler={handleTVLChanged} 
          />
        } 
        <Controls   
        title="Incentives" 
        defaultValue={initialIncentives} 
        value={incentives}
        unit="$"
        handler={handleIncentivesChanged} 
        />
      </Stack>

      { initialTvl && initialSevenDayVolume && <h2>LP APR: {lpApr.toFixed(4)*100}%</h2> }
      <Graph sevenDayVolume={sevenDayVolume} />
    </div>
  )
}

export default SketchArea
