import { createStore, combineReducers } from 'redux'

import changeState from "./Redux/Reducer/ChangeState"


const rootReducer = combineReducers({changeState:changeState})

const store = createStore(rootReducer)
export default store
