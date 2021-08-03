import NavBar from "./navbar"
import Footer from "./footer"
import Product from "./product"
import React, {useEffect,useState} from 'react'



function Home({cart, getFromCart, addProductToCart}){

 

  return(
    <div>
      <NavBar  cart={cart}/>
      <Product getFromCart={ getFromCart}  addProductToCart={addProductToCart} />
      <Footer/>
    </div>
     
  ) 
}
export default Home
