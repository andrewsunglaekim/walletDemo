import React, { Component } from 'react';
import walletsData from '../../data/dataForNode.js'
import Cards from './Cards.js'
import Header from '../components/Header.js'
import Balance from '../components/Balance.js'
import Transactions from '../containers/Transactions.js'

class Wallets extends Component {
  constructor(){
    super()
    this.chooseWallet = this.chooseWallet.bind(this)
    this.state = {
      wallets: walletsData,
      currentWallet: walletsData[0]
    }
  }

  chooseWallet(cardId){
    let currentWallet = this.state.wallets.find((wallet) => {
      return wallet.id === cardId
    })
    this.setState({currentWallet})
  }

  render() {
    return (
      <div className='walletsWidget'>
        <div className='shadow'>
          <div className='section left'>
            <Header />
            <Cards wallets={this.state.wallets}
                   onCardClick={this.chooseWallet}/>
          </div>
          <div className='section right'>
            <Balance balanceDollars={this.state.currentWallet.balanceDollars}
                     balanceCents={this.state.currentWallet.balanceCents}/>
            <Transactions wallet={this.state.currentWallet} />
          </div>
        </div>
      </div>
    )
  }
}

export default Wallets
