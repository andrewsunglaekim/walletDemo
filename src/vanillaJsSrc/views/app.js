function AppView(wallets){
  this.wallets = wallets
  this.cardViews = this.wallets.map((wallet) => {
    let card = new Card(wallet)
    return new CardView(card, this)
  })
  this.transactionsView = new TransactionsView(this.cardViews[0].card.transactions)
  this.balanceEl = document.querySelector('div.balance')
  this.setBalance(this.cardViews[0].card)
}

AppView.prototype = {
  setCard,
  setTransactions,
  setBalance
}

function setCard(card){
  this.setTransactions(card.transactions)
  this.setBalance(card)
}

function setTransactions(transactions){
  this.transactionsView.setTransactions(transactions)
}

function setBalance(card){
  this.balanceEl.innerHTML = ''
  let html = `<div class="title">Current Balance</div>` +
             `<div class="values">` +
               `<span class="dollars">$${card.balanceDollars}.</span><span class="cents">${card.balanceCents}</span>` +
             `</div>`
  this.balanceEl.innerHTML = html
}
