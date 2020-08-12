import { ADD_ITEMS} from '../actions/items'

const itemsList = (state = null, action) => {
    switch (action.type) {
        case ADD_ITEMS : 
            return {
                ...state,
                ...action.items
            }
        default :
            return state
    }
}

export default itemsList