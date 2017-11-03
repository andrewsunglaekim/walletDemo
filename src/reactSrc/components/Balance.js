import React, { Component } from 'react';

class Balance extends Component {
  render(){
    return (
      <div className='balance'>
        <div className='title'>Current Balance</div>
        <div className='values'>
          <span className='dollars'>${this.props.balanceDollars}.</span>
          <span className='cents'>{this.props.balanceCents}</span>
        </div>
      </div>
    )
  }
}

export default Balance;
