import React, { Component } from 'react';
import Eth from 'ethjs'
import eth from './eth'
import tub from './lib/tub'

class Cup extends Component {

  state = {
    cupi: null
  }

  tub = null

  constructor(props) {
    super(props)
    
    this.tub = tub(eth, this.props.tub)
    this.tub.getCups().then(logs => {
      logs.map(x => {
        console.log(Eth.toBN(x.data).toString())
      })
    })
    window.tub = this.tub
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
