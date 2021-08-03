// import {ADD_TO_CART , GET_FROM_CART } from "../../shared/apiUrls";

// import axios from 'react'
// import store from "../store";
// //add to cart
// export const addToCart=(product, quantity)=> async (dispatch, getState) =>{
   
//     var cartItem = {
//         name : product.name,
//         _id :  product.id,
//         img :  product.img,
//         quantity : quantity,
//         price : product.price,
//         subtotal : product.price * quantity
//     }
 
//     dispatch({type: 'ADD_TO_CART', payload : cartItem})
//     const cartItems = getState().cartReducer.cartItems
//     localStorage.setItem('cartItems', JSON.stringify(cartItems))
// }

// export const addToCart = (product, quantity = 1) => {
//     return async (dispatch) => {
//         const qty = cartItems[product._id]
//       const {
//         cart : { cartItems },
//       } = store.getState();
//       const quantity = cartItems[product._id]
//         ? parseInt(cartItems[product._id].qty + quantity)
//         : 1;
//       cartItems[product._id] = {
//         ...product,
//         qty,
//       };

//         dispatch({ type: ADD_TO_CART });
//         const payload = {
     
//           cartItems: [
//             {
//               product: product._id,
//               name : product.name,
//               img: product.img,
//               price : product.price,
//               quantity: qty,
//             },
//           ],
//         }
//         console.log(payload);
//         const res = await axios.post(`/user/cart/addtocart`, payload);
//         console.log(res);
//       console.log("addToCart::", cartItems);
  
//       dispatch({
//         type: ADD_TO_CART,
//         payload: { cartItems },
//       });
//     };
// }


// //get all products
// export const getItems=()=>async (dispatch)=> {
// try{
// const res=await getAllItems ();
// dispatch({
//     type:GET_FROM_CART,
//     payload:res.data
//  })
// }
// catch (error) {
//   console.log(error);
//  }
// }

export const addToCart = (product, quantity) => async (dispatch, getState)=> {
    var cartItem = {
    name : product.name,
    _id :  product.id,
    img :  product.img,
    quantity : quantity,
    price : product.price,
    subtotal : product.price * quantity
}

dispatch({type: 'ADD_TO_CART', payload : cartItem})
const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems', JSON.stringify(cartItems))

}