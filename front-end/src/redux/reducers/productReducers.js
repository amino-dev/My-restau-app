import { GET_PRODUCTS,ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../../shared/apiUrls";
// import {ADD_PRODUCT,GET_PRODUCTS} from "../actions/types"
const initialState={
  datas : [],
  loading:true
} 

 export const productReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_PRODUCTS:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_PRODUCT:
     return {
      ...state,
      datas: [...state.datas, payload]

     };
     case DELETE_PRODUCT:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
      case UPDATE_PRODUCT:
        return {
          ...state,
          datas: state.datas.map(data =>
            data._id === payload._id ? payload : data
          )
        };
  }
  return state
};