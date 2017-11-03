import React, { Component } from 'react';

class Balance extends Component {
  render(){
    return (
      <div>
        <div>Current Balance</div>
        <div>
          <span>${this.props.balanceDollars}.</span>
          <span>{this.props.balanceCents}</span>
        </div>
      </div>
    )
  }
}

export default Balance;
