import {addOrder,getOrders,delOrder}   from "../../services/api"
import { GET_ORDERS,ADD_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../../shared/apiUrls";
import axios from 'axios'

//add an order
export const addNewOrder=(tel, adress, status  )=> async (dispatch) =>{
    try{
        const res=await addOrder ( tel,adress,status );
        dispatch ({
            type:ADD_ORDER,
            payload:res.data
        })
        dispatch(getAllOrders);
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//get all orders
export const getAllOrders=()=>async (dispatch)=> {
try{
const res=await getOrders ();
dispatch({
    type:GET_ORDERS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//delete an order
  export const deleteOrder = (id)=> async (dispatch) => {
    try {
      await delOrder(id);
      dispatch({
        type:DELETE_ORDER,
        payload:id
    })
      console.log("delete")
      dispatch(getAllOrders);
    } catch (error) {
      console.log(error);
    }
  };

//update an order
export const updateOrder = (id,status ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5000/restauApp/order/update/${id}`,{status }) 
       
      dispatch({
        type: UPDATE_ORDER, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };