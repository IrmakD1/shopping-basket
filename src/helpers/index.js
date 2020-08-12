import { map } from 'lodash'

export const generateUID = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export const confirmCurrency = (categoryArray, basket) => {

    const basketCurrency = map(basket, item => item.currency)
    const categoryCurrency = map(categoryArray, item => item.currency)

    console.log(basketCurrency)
    console.log(categoryCurrency)

    return categoryArray[0].currency === basket[0].currency ? true : basket[0].currency
}