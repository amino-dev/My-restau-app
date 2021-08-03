import { GET_ORDERS,ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../../shared/apiUrls";
// import {ADD_PRODUCT,GET_PRODUCTS} from "../actions/types"
const initialState={
  datas : [],
  loading:true
} 

 export const orderReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_ORDERS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_ORDER:
     return {
      ...state,
      datas: [...state.datas, payload]

     };
     case DELETE_ORDER:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_ORDER:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};