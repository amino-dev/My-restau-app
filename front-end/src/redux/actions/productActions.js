import {addProduct,getProducts,delProduct}   from "../../services/api"
import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "../../shared/apiUrls";
import axios from 'axios'

//add a product
export const addNewProduct=(name, price,img,description )=> async (dispatch) =>{
    try{
        const res=await addProduct (name, price,img,description);
        dispatch ({
            type:ADD_PRODUCT,
            payload:res.data
        })
        dispatch(getAllProducts);
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}
//get all products
export const getAllProducts=()=>async (dispatch)=> {
try{
const res=await getProducts ();
dispatch({
    type:GET_PRODUCTS,
    payload:res.data
 })
}
catch (error) {
  console.log(error);
 }
}

//delete a product
  export const deleteProduct = (id)=> async (dispatch) => {
    try {
      await delProduct(id);
      dispatch({
        type:DELETE_PRODUCT,
        payload:id
    })
      console.log("delete")
      dispatch(getAllProducts);
    } catch (error) {
      console.log(error);
    }
  };

//update a product
export const updateProduct = (id,name, price,img,description ) => async dispatch => {
    try {
      const res = await axios.put(`http://localhost:5000/restauApp/product/update/${id}`,{name, price,img,description }) 
       
      dispatch({
        type: UPDATE_PRODUCT, 
        payload: res.data
      });
      console.log("update")
    } catch (error) {
      console.log(error);
    }
  };