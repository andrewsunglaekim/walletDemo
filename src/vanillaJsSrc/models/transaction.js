function Transaction(title, description, type, date, amountDollars, amountCents){
  this.title = title
  this.descriptio = descriptio
  this.type = type
  this.date = date
  this.amountDollars = amountDollars
  this.amountCents = amountCents
}

Transaction.prototype = {
  formatDateWithDay
}

function formatDateWithDay(date){
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let month = months[date.getMonth()]
  let year = date.getFullYear().toString()
  let day = date.getDate()
  return `${day} ${month}, ${year}`
}
