import { combineReducers } from 'redux'
import itemsList from './items'
import basket from './basket'

export default combineReducers({
    itemsList,
    basket
})