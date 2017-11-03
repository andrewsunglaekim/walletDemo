import React, { Component } from 'react';
import Card from '../components/Card.js'

class Cards extends Component {
  render() {
    let cards = this.props.wallets.map((wallet) => {
      return <Card key={wallet.id} card={wallet} onCardClick={this.props.onCardClick}/>
    })
    return (
      <div>
        {cards}
      </div>
    )
  }
}

export default Cards
