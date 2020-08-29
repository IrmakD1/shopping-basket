import { filter } from 'lodash'
import { couponCodes } from '../data/coupon'
import { convertBasketItems, findOriginalPrice } from '../services'
import { handleChangeBasketPrice } from '../actions/basket'

export const ADD_COUPON = 'ADD_COUPON'
export const CLEAR_COUPON = 'CLEAR_COUPON'


export const addCoupon = (coupon) => ({
  type: ADD_COUPON,
  coupon
})

export const clearCoupon = () => ({
    type: CLEAR_COUPON
})

export const handleAddCoupon = (existingState, code, currentBasket) => (dispatch) => {
    
    // checks and identifies the discount code against the stored discount codes
    const codeToDispatch = filter(couponCodes, codeObj => codeObj.code === code)

    if (codeToDispatch.length > 0) {

      //Checks if there is an existing coupon code that has been applied
      if(Object.entries(existingState).length === 0) {
        dispatch(addCoupon(codeToDispatch[0]))

        const updatedBasket = convertBasketItems(currentBasket, codeToDispatch[0].value, currentBasket[0].currency)
        handleChangeBasketPrice(updatedBasket)
      } else if (codeToDispatch[0].value < existingState.coupon.value) {
        dispatch(addCoupon(codeToDispatch[0]))

        const originalBasket = findOriginalPrice(currentBasket, existingState.coupon.value)

        const updatedBasket = convertBasketItems(originalBasket, codeToDispatch[0].value, currentBasket[0].currency)
        handleChangeBasketPrice(updatedBasket)
      } else return

    } else {
      throw Error('This code does not exist')
    }
}

export const handleClearCoupon = () => (dispatch) => {
  dispatch(clearCoupon())
}