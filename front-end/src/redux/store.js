import { createStore, applyMiddleware,compose} from "redux";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";

const middleWare = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
  cartReducer :  {
    cartItems : cartItems
  } 
}
// const cartItemsInLocalStorage = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   : [];

// const INITIAL_STATE = {
//   cart: {
//     cartItems: cartItemsInLocalStorage,
//   },
// };
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);


export default store