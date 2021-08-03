import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getAllOrders, updateOrder} from "../../redux/actions/orderActions"
import {FaTrash,FaHome} from 'react-icons/fa'
import {Table,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import UpdateOrder from './updateOrder'

const OrderDashboard = ({cartItem}) => {
  const datas = useSelector(state => state.orderReducer.datas)
  
  //get all orders
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getAllOrders())
      }, [dispatch])
   console.log("my data",datas)

  
   const getCartTotal = () => {
    return cartItem
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(0);
  };
      return (  
        <div className="mt-4">
           <Link to="/" className="ml-3 btn-icon dash-icon my-5"><FaHome/></Link>
        <div className="d-flex justify-content-around flex-wrap mt-5" >
                  <div className="mb-5">
                     <Table className="table" striped bordered hover className="">
        <thead>
          <tr>
             <th className="text-center">Order ID</th>
             <th width="60px" className="text-center">Telephone</th>
             <th className="text-center">Adress</th>
             <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((el,key) => (
            
                <tr className="mb-5" key={key}>
               <td className="pt-3">{el._id}</td>
               <td className="pt-3">{el.tel}</td>
               <td className="pt-3">{el.adress}</td>
               <td className="pt-3">{el.status}</td>
               <td><UpdateOrder  id={el._id}  el={el}/></td>  
            </tr>
          ))}
        </tbody>
      </Table>        
                  </div>
              
            </div>
            <div className = "row justify-content-center">
               <div className="col-md-12 mt-4">
                   <h1 className="text-center mt-3 mb-5">Cart : {cartItem.length} items</h1>
                   {cartItem.map(el => {
                    return  <div className="d-flex jusitfy-content-between">
                                <div>
                                   <p><u>name</u>: {el.name}</p> 
                                   <p><u>Price</u> : {el.price}$ </p>
                                   <hr/>
                                </div>

                                <div>
                                Item           <img className="cartImg mt-4" src={el.img}></img> 
                                </div>
                                <div>
      
                               
                                </div>
                            </div>
                   })}
                

               </div>

               <div className="col-md-4 mt-4">
                   <h1 className="text-center mt-3 mb-5">Subtotal = {getCartTotal()}$</h1>
               </div>

           </div>
          
        </div>
       
      )
  }
  
  export default OrderDashboard