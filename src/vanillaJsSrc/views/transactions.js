function TransactionsView(transactions){
  this.transactions = transactions
  this.el = document.querySelector('div.transactions')
  this.el.innerHTML = ''
  this.render()
}

TransactionsView.prototype = {
  render,
  setTransactions
}

function setTransactions(transactions){
  this.transactions = transactions
  this.el.innerHTML = ''
  this.render()
}

function render(){
  this.transactions.forEach((transaction) => {
    let el = document.createElement('div')
    el.className = 'transaction'
    let html = `<div class='beginning'>` +
                 `<div class='transactionType'>${transaction.type == 'deduction' ? '-' : '+'}</div>` +
               `</div>` +
               `<div class='middle'>` +
                 `<div class='title'>${transaction.title}</div>` +
                 `<div class='description'>` +
                   `<div class='text'>${transaction.description}</div>` +
                   `<div class='date'>${transaction.formatDate()}</div>` +
                 `</div>` +
               `</div>` +
               `<div class='amount ${transaction.type}'>` +
                 `<span>$${transaction.amountDollars}.</span>` +
                 `<span class='cents'>${transaction.amountCents}</span>` +
               `</div>`
    el.innerHTML = html
    this.el.append(el)
  })
}
