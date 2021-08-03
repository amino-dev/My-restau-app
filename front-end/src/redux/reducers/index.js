import { combineReducers} from "redux";
import {cartReducer} from "./cartReducers";
import {orderReducer} from "./orderReducers";
import {productReducer} from "./productReducers"


export const rootReducer = combineReducers({
    productReducer,
    cartReducer ,
    orderReducer
})