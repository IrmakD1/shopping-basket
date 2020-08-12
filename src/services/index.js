import axios  from 'axios'
import { map, get } from'lodash'


// const fs = require('fs')

// const accessToken = fs.readFileSync('../data/token')
// const currencyShema = fs.readFileSync('../data/currencySchema')

const accessToken = '677e4889458696246c0e21b77d8e513c'
const currencySchema = {
  "USD": "$",
  "EUR": "€",
  "GBP": "£"
}

const callCurrencyConverter = async (from,  to) => {
    const url = `http://api.currencylayer.com/live?access_key=${accessToken}&source=${from}&currencies=${to}&format=1`

    try {
      const { data } = await axios.get(url)
      return data
    } catch (err) {
      // TODO: error handling dispatch
      console.log(err);
    }
}

const convertBasketItems = (basket, exchangeRate, newCurrency) => {

  if(get(basket[0], 'price')) {
    const newBasket = map(basket, itemObj => {
      const newPrice = itemObj.price * exchangeRate
      const roundedPrice =  (Math.round(newPrice * 100) / 100).toFixed(2)

      itemObj.price = roundedPrice
      itemObj.currency = newCurrency
      itemObj.currencyUnit = currencySchema[newCurrency]

      return itemObj
    })
    return newBasket
  } else {
    const newItem = {...basket} 
    const newPrice = newItem.price * exchangeRate
    const roundedPrice =  (Math.round(newPrice * 100) / 100).toFixed(2)

    newItem.price = roundedPrice
    newItem.currency = newCurrency
    newItem.currencyUnit = currencySchema[newCurrency]

    return newItem
  }
}


export const convertBasket = async (basket, originalCurrency, chosenCurrency) => {
  
  const response = await callCurrencyConverter(originalCurrency, chosenCurrency)
  const exchangeRate = response.quotes[`${originalCurrency}${chosenCurrency}`]

  return convertBasketItems(basket, exchangeRate, chosenCurrency)

} 