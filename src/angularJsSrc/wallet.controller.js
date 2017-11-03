(function(){
  angular.module('walletDemo')
    .controller('walletController', [Callback])

  function Callback(){
    let wVM = this
    wVM.wallets = wallets
    wVM.currentWallet = wVM.wallets[0]

    wVM.getImageSrc = getImageSrc
    wVM.formatDate = formatDate
    wVM.formatDateWithDay = formatDateWithDay
    wVM.selectWallet = selectWallet

    function getImageSrc(cardType){
      let imageHashMap = {
        visa: 'visaLogo.png',
        mastercard: 'mastercardLogo.png',
        amex: 'amexCard.png'
      }
      return `../images/${imageHashMap[cardType]}`
    }

    function formatDate(date){
      let month = date.getMonth() + 1
      month = month < 10 ? "0" + month : month
      let year = date.getFullYear().toString()
      year = year.substring(2)
      return `${month}/${year}`
    }

    function formatDateWithDay(date){
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      let month = months[date.getMonth()]
      let year = date.getFullYear().toString()
      let day = date.getDate()
      return `${day} ${month}, ${year}`
    }

    function selectWallet(wallet){
      wVM.currentWallet = wallet
    }
  }
})()
