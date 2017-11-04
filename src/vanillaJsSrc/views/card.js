function CardView(card){
  this.card = card
  this.parentEl = document.querySelector('div.cards')
  this.render()
}

CardView.prototype = {
  render,
  getImageSrc
}

function render(){
  let el = document.createElement('div')
  el.className = 'card'
  let html = `<img src='${this.getImageSrc}'>` +
             `<div class='cardNum'>${this.card.cardNum}</div>`
             `<div class='expDate'>Valid Thru: ${this.card.formatDate}</div>`
  el.innerHTML = html
  this.parentEl.appendChild(el)
}

function getImageSrc(){
  let imageHashMap = {
    visa: 'visaLogo.png',
    mastercard: 'mastercardLogo.png',
    amex: 'amexCard.png'
  }
  return `../../images/${imageHashMap[this.card.cardType]}`
}
