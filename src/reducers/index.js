import { combineReducers } from 'redux'
import itemsList from './items'
import basket from './basket'
import error from './error'

export default combineReducers({
    itemsList,
    basket,
    error
})