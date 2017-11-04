function Card(cardType, cardNum, expDate, balanceDollars, balanceCents, transactions){
  this.id = id
  this.cardType = cardType
  this.cardNum = cardNum
  this.expDate = expDate
  this.balanceDollars = balanceDollars
  this.balanceCents = balanceCents
  this.transactions = transactions.map((transaction) => {
    return new Transaction()
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
