import { ADD_ERROR, CLEAR_ERROR } from '../actions/error'

const initialState = {}

const error = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR : 
            return {
                ...state,
                error: action.text
            }
        case CLEAR_ERROR : 
            return initialState
        default : 
            return state
    }
}

export default error