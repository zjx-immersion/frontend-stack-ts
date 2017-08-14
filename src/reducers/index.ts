import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import signInFrom from './signInFrom'

export default combineReducers({
    router: routerReducer,
    signInFrom,
})
