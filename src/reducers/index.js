import { combineReducers } from 'redux'
import counterReducer from './counter'
import LoggedReducer from './isLogged'

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged : LoggedReducer
})

export default allReducer