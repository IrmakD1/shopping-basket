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

export const handleAddBasketItem = (item, existingBasket) => async dispatch => {
    
    if (existingBasket.length > 0) {
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

export const handleChangeBasketPrice = basket => dispatch => {
    dispatch(clearBasket())
    dispatch(addNewBasket(basket))
}

export const handleClearBasket = () => dispatch => {
    dispatch(clearBasket())
}