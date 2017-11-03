import React, { Component } from 'react';
import visaLogo from '../../images/visaLogo.png'
import mastercardLogo from '../../images/mastercardLogo.png'
import amexCard from '../../images/amexCard.png'

class Card extends Component {
  grabImage(cardType){
    let imageHashMap = {
      visa: visaLogo,
      mastercard: mastercardLogo,
      amex: amexCard
    }
    return imageHashMap[cardType]
  }

  formatDate(date){
    let month = date.getMonth() + 1
    month = month < 10 ? "0" + month : month
    let year = date.getFullYear().toString()
    year = year.substring(2)
    return `${month}/${year}`
  }

  render() {
    const {card, onCardClick} = this.props
    return (
      <div className={`card ${this.props.currentWallet.id == card.id ? 'active': undefined}`}
           onClick={() => onCardClick(card.id)}>
        <img src={this.grabImage(card.cardType)}
             alt={this.grabImage(card.cardType)} />
        <div className='cardNum'>{card.cardNo}</div>
        <div className='expDate'>Valid Thru: {this.formatDate(card.expDate)}</div>
      </div>
    )
  }
}

export default Card
