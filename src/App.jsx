import React, { Component } from 'react';
import Loading from './Loading'
import Price from './Price'
import Cup from './Cup'
import eth from './eth'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          {eth.type === "Infura" ? "You are connected via Infura. This is read only." : "Zomg, metamask?"}
        </p>
        <Price name="ETH_USD" address="0x729D19f657BD0614b4985Cf1D82531c67569197B" />
        <Price name="MKR_USD" address="0x99041F808D598B782D5a3e498681C2452A31da08" />
        <Cup cupi="3" />
      </div>
    );
  }
}

export default App;
