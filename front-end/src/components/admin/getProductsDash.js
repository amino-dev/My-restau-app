import React, {useEffect,useState} from 'react'
import {Card,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// import { getProducts } from '../actions/products'
import {getAllProducts, deleteProduct} from "../../redux/actions/productActions"
import {FaTrash} from 'react-icons/fa'
import UpdateProduct from './updateProduct'

const Product = () => {
 
  //  const products = useSelector(state => state.productStore)
  
  // const delProduct = () => {
  //   dispatch(deleteProduct(currentProduct.id))
  //     .then(() => {
  //       props.history.push("/");
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  const datas = useSelector(state => state.productReducer.datas)
  
  //get all products
   const dispatch = useDispatch()
   useEffect(() => {
    dispatch(getAllProducts())
       }, [dispatch])
    console.log("my data",datas)

  //delete a product
  const delProduct=(id)=>{
    dispatch (deleteProduct(id)) 
  }
    return (  
      <div className="d-flex justify-content-around flex-wrap mt-5" >
             {datas.map((el,key ) => (
                  <div className="mb-5" key={key}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" className="pt-3" src={el.img}/>
                      <Card.Body>
                        <Card.Title>{el.name}</Card.Title>
                        <Card.Text>{el.price} $</Card.Text>
                        <Card.Text>{el.description}</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Button className="btn-icon dash-icon" onClick={() => delProduct(el._id)} ><FaTrash/></Button>
                            <UpdateProduct id={el._id}  el={el}/>
                        </div>
                      </Card.Body>
                    </Card>           
                  </div>
                ))
              }
            </div>
    )
}

export default Product