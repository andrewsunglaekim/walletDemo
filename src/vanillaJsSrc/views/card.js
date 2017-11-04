function CardView(card, AppView){
  this.card = card
  this.AppView = AppView
  this.parentEl = document.querySelector('div.cards')
  this.render()
  if(this.card.id == 1){
    this.el.className = 'card active'
  }
}

CardView.prototype = {
  render,
  getImageSrc,
  toggleActive
}

function render(){
  let el = document.createElement('div')
  el.className = 'card'
  let html = `<img src='${this.getImageSrc()}'>` +
             `<div class='cardNum'>${this.card.cardNum}</div>` +
             `<div class='expDate'>Valid Thru: ${this.card.formatDate()}</div>`
  el.innerHTML = html
  this.parentEl.appendChild(el)
  el.addEventListener('click', () => {
    this.toggleActive()
  })
  this.el = el
}

function getImageSrc(){
  let imageHashMap = {
    visa: 'visaLogo.png',
    mastercard: 'mastercardLogo.png',
    amex: 'amexCard.png'
  }
  return `../images/${imageHashMap[this.card.cardType]}`
}

function toggleActive(){
  this.AppView.setCard(this.card)
  let cards = document.getElementsByClassName('card')
  for(let i = 0; i < cards.length; i++){
    cards[i].className = 'card'
  }
  this.className = 'card active'
  this.el.className = 'card active'
}
