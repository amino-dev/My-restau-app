
import React, {useEffect,useState} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {TiDelete} from 'react-icons/ti'
import {addNewOrder} from "../../redux/actions/orderActions"
import {Card,Button,Modal,Form} from 'react-bootstrap'



export default function Cart({cartItem}) {
 
    const cartState = useSelector(state => state.cartReducer.cartItems)
    
    const getCartTotal = () => {
        return cartItem
          .reduce((acc, value) => {
            return acc + value.price;
          }, 0)
          .toFixed(0);
      };



      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);


      const dispatch = useDispatch()
      const [input,setInput]=useState({tel:"", adress:""})
  
      const handleChange=(e)=>{
          const {name,value}=e.target
          setInput({
              ...input,
              [name]:value
          })
          console.log("input",input)
      }
      
      const addOrder=()=>{
        dispatch (addNewOrder(input.tel,input.adress)) 
        console.log("inpuuuuuuuuuuuut",input)
        setShow(false)
        }
    return (
        <div>
           <div className = "row justify-content-center">
               <div className="col-md-6 mt-4">
                   <h1 className="text-center mt-3 mb-5">My Cart : {cartItem.length} items</h1>
                   {cartItem.map(el => {
                    return  <div className="d-flex jusitfy-content-between">
                                <div>
                                   <p><u>name</u>: {el.name}</p> 
                                   <p><u>Price</u> : {el.price}$ </p>
                                   <p><u>Description</u> : {el.description}</p>
                                   <hr/>
                                </div>

                                <div>
                                <img className="cartImg mt-4" src={el.img}></img> 
                                </div>
                                <div>
                                {/* <Button onClick={removeItem(el)}><TiDelete className="mt-5 pt-1 cartIcon"/></Button> */}
                               
                                </div>
                            </div>
                   })}
                

               </div>

               <div className="col-md-4 mt-4">
                   <h1 className="text-center mt-3 mb-5">Subtotal = {getCartTotal()}$</h1>
                  
                   <div className="d-flex justify-content-center mt-5">
                        <Button onClick={handleShow} >Checkout</Button>
                        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add an order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
          
            <Form.Group className="mb-3">
                   <Form.Control type="text" name="adress"
                   onChange={handleChange}
                   placeholder="Client Adress" />
              </Form.Group>
              <Form.Group className="mb-3">
                   <Form.Control type="text" name="tel"
                   onChange={handleChange}
                   placeholder="Client Telephone" />
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={addOrder}>Post</Button>
          </Modal.Footer>
        </Modal>
                   </div>
               </div>

           </div>
        </div>
    )
}

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// // Components
// import CartItem from "./cartItem";

// // Actions
// import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

// const Cart = () => {
//   const dispatch = useDispatch();

//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

//   useEffect(() => {}, []);

//   const qtyChangeHandler = (id, qty) => {
//     dispatch(addToCart(id, qty));
//   };

//   const removeFromCartHandler = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   const getCartCount = () => {
//     return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
//   };

//   const getCartSubTotal = () => {
//     return cartItems
//       .reduce((price, item) => price + item.price * item.qty, 0)
//       .toFixed(2);
//   };

//   return (
//     <>
//       <div className="cartscreen">
//         <div className="cartscreen__left">
//           <h2>Shopping Cart</h2>

//           {cartItems.length === 0 ? (
//             <div>
//               Your Cart Is Empty <Link to="/">Go Back</Link>
//             </div>
//           ) : (
//             cartItems.map((item) => (
//               <CartItem
//                 key={item.product}
//                 item={item}
//                 qtyChangeHandler={qtyChangeHandler}
//                 removeHandler={removeFromCartHandler}
//               />
//             ))
//           )}
//         </div>

//         <div className="cartscreen__right">
//           <div className="cartscreen__info">
//             <p>Subtotal ({getCartCount()}) items</p>
//             <p>${getCartSubTotal()}</p>
//           </div>
//           <div>
//             <button>Proceed To Checkout</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;



