import {useState, useEffect} from 'react'
import { COINGECKO_API_URL, COINGECKO_LYX_ID, COINGECKO_CURRENCY } from '../constants';

const useLYXPrice = () => {
  const [lyxPrice, setLyxPrice] = useState(null);

  async function fetchPrice() {
    try {
      return fetch(`${COINGECKO_API_URL}/simple/price?ids=${COINGECKO_LYX_ID}&vs_currencies=${COINGECKO_CURRENCY}`)
        .then(response => response.json())
        .then((data) => { 
          console.log(data);
          console.log("LYX price: " + data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
          setLyxPrice(data[COINGECKO_LYX_ID][COINGECKO_CURRENCY])
        })
    } catch (error) {
      console.log(error)
      return 7.2
    }
  }


  useEffect(() => {
    const init = async () => {
      await fetchPrice();
    }
    init();
  }, [])

  return lyxPrice
}

export default useLYXPrice
