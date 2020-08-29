import axios  from 'axios'
import { map, get } from'lodash'

import { accessToken } from '../data/token'
import { currencySchema } from '../data/currency'

//calls the currency converter api with the original currency and the target currency
export const callCurrencyConverter = async (from,  to) => {
  const url = `http://api.currencylayer.com/live?access_key=${accessToken}&source=${from}&currencies=${to}&format=1`
      
  const { data } = await axios.get(url)
  return data
}

export const convertBasketItems = (basket, exchangeRate, newCurrency) => {

  //checks if it is converting a full basket or if it is just converting a single item
  if(get(basket[0], 'price')) {
    const newBasket = map(basket, itemObj => {
      const newPrice = itemObj.price * exchangeRate
      const roundedPrice = (Math.round(newPrice * 100) / 100).toFixed(3)

      itemObj.price = (Math.round(roundedPrice * 100) / 100).toFixed(2)
      itemObj.currency = newCurrency
      itemObj.currencyUnit = currencySchema[newCurrency]

      return itemObj
    })
    return newBasket
  } else {
    const newItem = {...basket} 
    const newPrice = newItem.price * exchangeRate
    const roundedPrice = (Math.round(newPrice * 100) / 100).toFixed(3)

    newItem.price = (Math.round(roundedPrice * 100) / 100).toFixed(2)
    newItem.currency = newCurrency
    newItem.currencyUnit = currencySchema[newCurrency]

    return newItem
  }
}

export const findOriginalPrice = (currentBasket, discountValue) => {
  const originalBasket = map(currentBasket, itemObj => {
    const discountPercentage = 1 - discountValue
    const roundedDiscountPercentage = (Math.round(discountPercentage * 100) / 100).toFixed(2)
    const originalPrice = itemObj.price / (1 - roundedDiscountPercentage)
    const roundedPrice =  (Math.round(originalPrice * 100) / 100).toFixed(2)

    itemObj.price = roundedPrice
    return itemObj
  })

  return originalBasket
}


export const convertBasket = async (basket, originalCurrency, chosenCurrency) => {
    const response = await callCurrencyConverter(originalCurrency, chosenCurrency)
    const exchangeRate = response.quotes[`${originalCurrency}${chosenCurrency}`]
    
    return convertBasketItems(basket, exchangeRate, chosenCurrency)
} 