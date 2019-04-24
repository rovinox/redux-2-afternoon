import {createStore, combineReducers, applyMiddleware} from "redux"
import promiseMiddleware from "redux-promise-middleware"
import budgeReducer from "./ducks/budgetReducer"
import userReducer from "./ducks/userReducer"



const rootReduser = combineReducers({
    budget: budgeReducer,
    user:userReducer
})











export default createStore(rootReduser, applyMiddleware(promiseMiddleware))
