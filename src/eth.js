import Eth from 'ethjs'
window.Eth = Eth

let eth 
if (window.web3 && window.web3.currentProvider) {
  eth = new Eth(window.web3.currentProvider)
  eth.type = 'managed'
} else {
  eth = new Eth(new Eth.HttpProvider('https://mainnet.infura.io/'))
  eth.type = 'Infura'
}

window.eth = eth

export default eth
