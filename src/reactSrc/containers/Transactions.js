import React, { Component } from 'react';
import Transaction from '../components/Transaction.js'

class Transactions extends Component {
  render(){
    let transactions = this.props.wallet.transactions.map((transaction, i) => {
      return (
        <Transaction transaction={transaction} key={i} />
      )
    })
    return (
      <div className='transactions'>
        {transactions}
      </div>
    )
  }
}

export default Transactions;
