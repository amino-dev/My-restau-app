import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:5000/restauApp" });

 //add a product

 function addProduct(name, price,img,description ) {
    return Api.post("/product/add", { name, price, img, description})
  }

  //get all products
  function getProducts(){
    return Api.get("/product/getAll");
  }

  //delete a product
  function delProduct(id){
    return Api.delete(`/product/delete/${id}`);
  }

  //update a product  
  function updateProduct(id) {
  return Api.put(`/product/update/${id}`);
  }

  function addToCart(product, quantity ) {
    return Api.post("/cart/addItem", {product, quantity})
  }


  function getAllItems(){
    return Api.get("cart/getCartItems");
  }


  function delFromCart(id){
    return Api.delete(`/cart/removeItem/${id}`);
  }


  function updateFromCart(id) {
  return Api.put(`/cart/updateItem/${id}`);
  }


//add an order

function addOrder(adress, tel, status ) {
  return Api.post("/order/add", { adress, tel, status})
}

//get all orders
function getOrders(){
  return Api.get("/order/getAll");
}

//delete an order
function delOrder(id){
  return Api.delete(`/order/delete/${id}`);
}

//update an order  
function updateOrder(id) {
return Api.put(`/order/update/${id}`);
}




  export {addProduct,getProducts,delProduct,updateProduct,addToCart,getAllItems,addOrder,getOrders,delOrder,updateOrder} 
  export default {addProduct,getProducts,delProduct,updateProduct,addToCart,getAllItems,addOrder,getOrders,delOrder,updateOrder}