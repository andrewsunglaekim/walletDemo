function Transaction(transaction){
  this.title = transaction.title
  this.description = transaction.description
  this.type = transaction.type
  this.date = transaction.date
  this.amountDollars = transaction.amountDollars
  this.amountCents = transaction.amountCents
}

Transaction.prototype = {
  formatDate
}

function formatDate(){
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = months[this.date.getMonth()]
  let year = this.date.getFullYear().toString()
  let day = this.date.getDate()
  return `${day} ${month}, ${year}`
}
