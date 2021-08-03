
import './App.css';
import Home from './components/screens/home';
import Dashboard from './components/admin/dash';
import {BrowserRouter, Route} from "react-router-dom"
import Login from './components/screens/authentification/login';
import Register from './components/screens/authentification/register';
import Cart from './components/screens/cart';
import {useSelector } from 'react-redux'
import React, {useEffect,useState} from 'react'

function App() {
  
  const [cart, setCart] = useState(0)
  const getFromCart =() => {
    setCart(cart + 1)
  }
  // const addProductToCart = item => {
  //   if (!cartItem.find(cartItemm => cartItemm.id === item.id)) {
  //     setCartItem([...cartItem, item]);
  //   }
  // };
  const [cartItem, setCartItem] = useState([])
  const addProductToCart =(e) => {
  cartItem.push(e)
  }
 
  // const removeItem = (el) => {
  //   let index = cartItem.indexOf(el)
  //   if (index !== -1) {
  //     cartItem.splice(index, 1);
  //     setCartItem(cartItem)}
  //   setCart(cart - 1)
  // }
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path="/"><Home cart={cart}  getFromCart={ getFromCart}  addProductToCart={addProductToCart}/></Route>
          <Route exact path="/restauApp/cart"><Cart cart={cart} cartItem={cartItem} /></Route>
          <Route exact path="/restauApp/admin"><Dashboard cartItem={cartItem}/></Route>
          <Route exact path="/restauApp/login"><Login/></Route>
          <Route exact path="/restauApp/register"><Register/></Route>

      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
