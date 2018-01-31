import React, { Component } from 'react';
import eth from './eth'
import Eth from 'ethjs'

class Price extends Component {

  state = {
    price: null,
    last: null
  }

  componentWillMount() {
    this.getPrice()
    this.intervalId = setInterval(this.getPrice, 60 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  getPrice = async () => {
    let price = await eth.call({
      to: this.props.address,
      data: Eth.keccak256('read()').substr(0, 10)
    })
    price = Eth.fromWei(price, 'ether')
    const last = this.state.price
    this.setState({ price, last })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          {this.props.name} {this.state.price} {this.state.last}
        </p>
      </div>
    );
  }
}

export default Price;
