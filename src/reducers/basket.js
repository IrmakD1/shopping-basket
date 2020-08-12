import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM, CLEAR_BASKET, ADD_NEW_BASKET } from '../actions/basket'

const initialState = {
    basket: []
}

const basket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET_ITEM : 
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case REMOVE_BASKET_ITEM : 
            return {
                basket: [
                    ...state.basket.filter(item => item.id !== action.id)
                ],
            }
        case ADD_NEW_BASKET : 
            return {
                ...state,
                basket: action.basket
            }
        case CLEAR_BASKET : 
            return initialState
        default : 
            return state
    }
}

export default basket