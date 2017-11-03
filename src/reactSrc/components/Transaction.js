import React, { Component } from 'react';

class Transaction extends Component {
  formatDate(date){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let month = months[date.getMonth()]
    let year = date.getFullYear().toString()
    let day = date.getDate()
    return `${day} ${month}, ${year}`
  }

  render(){
    const {title, description, type, date, amountDollars, amountCents} = this.props.transaction
    console.log(this.props);
    return (
      <div className='transaction'>
        <div className='transactionType'>{type == 'deduction' ? "-" : "+"}</div>
        <div>
          <div className='title'>{title}</div>
          <div className='description'>
            <div className='text'>{description}</div>
            <div className='date'>{this.formatDate(date)}</div>
          </div>
          <div className='balance'>
            <span>${amountDollars}.</span>
            <span>{amountCents}</span>
          </div>
        </div>
        this is a transaction
      </div>
    )
  }
}

export default Transaction
