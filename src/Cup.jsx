import React, { Component } from 'react';
import Eth from 'ethjs'
import eth from './eth'

const tubAbi = require('./abi/tub.json')

class Cup extends Component {

  state = {
    cupi: null
  }

  tub = null

  constructor() {
    super()
    this.tub = new eth.contract(tubAbi).at('0x448a5065aeBB8E423F0896E6c5D525C040f59af3')
    window.tub = this.tub
    eth.getLogs({
      address: '0x448a5065aeBB8E423F0896E6c5D525C040f59af3', 
      fromBlock: 4752011, toBlock: 5002941, 
      topics: ["0x89b8893b806db50897c8e2362c71571cfaeb9761ee40727f683f1793cda9df16"]
    }).then(logs => {
      console.log(logs)
    })
  }

  componentWillMount() {
    this.setState({
      cupi: this.props.cupi
    })
  }

  render() {
    return (
      <p>
        {Eth.abi.encodeParams(['uint256'], [this.state.cupi])}
      </p>
    )
  }
}

export default Cup
