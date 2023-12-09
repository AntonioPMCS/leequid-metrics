import { useEffect, useState} from 'react'

const useCountValidators = (blockchain) => {
  const [activeValidators, setActiveValidators] = useState(null);
  const [pendingValidators, setPendingValidators] = useState(null);

  async function fetchActiveValidators() {
    blockchain.getPoolContract().getActiveValidators()
    .then(result => {
      setActiveValidators(result)
    })
  }

  async function fetchPendingValidators() {
    blockchain.getPoolContract().getPendingValidators()
    .then(result => {
      setPendingValidators(result)
    })
  }

  useEffect(() => {
    const init = async () => {
      await fetchActiveValidators();
      await fetchPendingValidators();
    }
    init();
  }, [])

  return [activeValidators, pendingValidators];
}

export default useCountValidators
