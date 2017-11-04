function Card(card){
  this.id = card.id
  this.cardType = card.cardType
  this.cardNum = card.cardNo
  this.expDate = card.expDate
  this.balanceDollars = card.balanceDollars
  this.balanceCents = card.balanceCents
  this.transactions = card.transactions.map((transaction) => {
    return new Transaction(transaction)
  })
}

Card.prototype = {
  formatDate
}

function formatDate(){
  let month = this.expDate.getMonth() + 1
  month = month < 10 ? "0" + month : month
  let year = this.expDate.getFullYear().toString()
  year = year.substring(2)
  return `${month}/${year}`
}
