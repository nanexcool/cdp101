import Eth from 'ethjs'

const tubAbi = require('./tub.json')

function tub(eth, address) {
  let tub = new eth.contract(tubAbi).at(address)

  tub.getCups = () => {
    return eth.getLogs({
      address: address, 
      fromBlock: 4752011,
      topics: ["0x89b8893b806db50897c8e2362c71571cfaeb9761ee40727f683f1793cda9df16"]
    })
  }
  return tub
}

export default tub
