import { ADD_COUPON, CLEAR_COUPON } from '../actions/coupon'

const initialState = {}

const coupon = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COUPON : 
            return {
                ...state,
                coupon: action.coupon
            }
        case CLEAR_COUPON : 
            return initialState
        default : 
            return state
    }
}

export default coupon