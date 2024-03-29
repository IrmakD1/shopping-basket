import { ADD_BASKET_ITEM, REMOVE_BASKET_ITEM, CLEAR_BASKET, ADD_NEW_BASKET } from '../actions/basket'

const initialState = {
    basket: []
}

const orderBasket = (basket, item) => {

    const array = [...basket, item]

    if (basket.length === 0) {
        return array
    }

    const sortArray = array.map((data, idx) => {
        return {idx:idx, data:data}
    })
    
    const newArray = sortArray.sort(function(a, b) {
      if (a.data.item < b.data.item) return -1;
      if (a.data.item > b.data.item) return 1;
      return a.idx - b.idx
    });
    
    const answer = newArray.map(function(val){
        return val.data
    });

    return answer
}

const basket = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASKET_ITEM : 
            return {
                ...state,
                basket: orderBasket(state.basket, action.item)
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