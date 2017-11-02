import React, { Component } from 'react';
import visaLogo from '../images/visaLogo.png'
import amexCard from '../images/amexCard.png'
import mastercardLogo from '../images/mastercardLogo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello Worldsss
        <img src={visaLogo}/>
        <img src={amexCard}/>
        <img src={mastercardLogo}/>
      </div>
    );
  }
}

export default App;
