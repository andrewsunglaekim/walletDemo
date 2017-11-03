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
      <div>
        <img src={this.grabImage(card.cardType)}
             alt={this.grabImage(card.cardType)}
             onClick={() => onCardClick(card.id)}/>
        <div>{card.cardNo}</div>
        <div>Valid Thru: {this.formatDate(card.expDate)}</div>
      </div>
    )
  }
}

export default Card