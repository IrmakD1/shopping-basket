import { generateUID } from '../helpers'
import { convertBasket } from '../services'

export const ADD_BASKET_ITEM = 'ADD_BASKET_ITEM'
export const REMOVE_BASKET_ITEM = 'REMOVE_BASKET_ITEM'
export const CLEAR_BASKET = 'CLEAR_BASKET'
export const ADD_NEW_BASKET = 'ADD_NEW_BASKET'

export const addBasketItem = item => ({
    type: ADD_BASKET_ITEM,
    item
})

export const addNewBasket = basket => ({
    type: ADD_NEW_BASKET,
    basket
})

export const removeBasketItem = id => ({
    type: REMOVE_BASKET_ITEM,
    id
})

export const clearBasket = () => ({
    type: CLEAR_BASKET
})

//Add a new item to the basket but checks if the currecny needs changing to match th existing basket first
export const handleAddBasketItem = (item, existingBasket) => async dispatch => {
    
    //Checks if there are any items in the existing basket
    if (existingBasket.length > 0) {
        //If the currency of the new item does not match the current basket, it is updated
        if(item.currency !== existingBasket[0].currency) {
            const updatedItem = await convertBasket(item, item.currency, existingBasket[0].currency)
            
            const basketItem = {
                ...updatedItem,
                id: generateUID(),
                currency: existingBasket[0].currency,
                currencyUnit: existingBasket[0].currencyUnit,
            }

            dispatch(addBasketItem(basketItem))
        } else {
            const basketItem = {
                ...item,
                id: generateUID()
            }
    
            dispatch(addBasketItem(basketItem))
        }
    } else {
        const basketItem = {
            ...item,
            id: generateUID()
        }

        dispatch(addBasketItem(basketItem))
    }
}

export const handleRemoveBasketItem = item => dispatch => {

    dispatch(removeBasketItem(item.id))
}

//updates the whole basket with a new price
export const handleChangeBasketPrice = basket => dispatch => {
    dispatch(clearBasket())
    dispatch(addNewBasket(basket))
}

export const handleClearBasket = () => dispatch => {
    dispatch(clearBasket())
}