import React, { Component } from 'react';
import Wallets from './containers/Wallets.js';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wallets />
      </div>
    );
  }
}

export default App;
