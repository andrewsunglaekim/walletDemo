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
        <div className='beginning'>
          <div className='transactionType'>{type == 'deduction' ? "-" : "+"}</div>
        </div>
        <div className='middle'>
          <div className='title'>{title}</div>
          <div className='description'>
            <div className='text'>{description}</div>-
            <div className='date'>{this.formatDate(date)}</div>
          </div>
        </div>
        <div className={`amount ${type}`}>
          <span>${amountDollars}.</span>
          <span className='cents'>{amountCents}</span>
        </div>
      </div>
    )
  }
}

export default Transaction
