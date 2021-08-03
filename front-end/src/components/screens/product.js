// import React from 'react'
// import { useSelector } from 'react-redux'
// import {Card,Button} from 'react-bootstrap'
// function Product() {
//     const products = useSelector(state => state.products)
//     console.log('products',products)
//     return (
//       <div className="d-flex justify-content-around flex-wrap" >
//         {
//           products.map((el,index) => (
//             <div className="mb-5" key={index}>
//               <Card style={{ width: '18rem' }}>
//                 <Card.Img variant="top" className="pt-3" src={el.img}/>
//                 <Card.Body>
//                   <Card.Title>{el.name}</Card.Title>
//                   <Card.Text>{el.price} $</Card.Text>
//                   <Card.Text>{el.description}</Card.Text>
//                   <div className="d-flex justify-content-center">
//                   <Button variant="dark">Add to cart</Button>
//                   </div>
//                 </Card.Body>
//               </Card>           
//             </div>
//           ))
//         }
//       </div>
//     )
// }

// export default Product

import React, {useEffect,useState} from 'react'
import {Card,Button,Modal,Form} from 'react-bootstrap'
import {useDispatch, useSelector } from 'react-redux'
import {addToCart} from "../../redux/actions/cartActions"
import {getAllProducts} from "../../redux/actions/productActions"

// import { getProducts } from '../actions/products'


export default function Product({getFromCart,addProductToCart}) {

     const product = useSelector(state => state.productReducer.datas)
     const [quantity, setQuantity] = useState(1)
    //  const products = useSelector(state => state.productStore)
    
   
     const dispatch = useDispatch()
     useEffect(() => {
      dispatch(getAllProducts())
         }, [dispatch])
      console.log("my data",product)
    
      function addtoCart()
      {
        dispatch(addToCart((product, quantity)))
      }

    
      // const [input,setInput]=useState({adress:"" ,tel:""})
  
      // const handleChange=(e)=>{
      //     const {name,value}=e.target
      //     setInput({
      //         ...input,
      //         [name]:value
      //     })
      //     console.log("input",input)
      // }
      
      // const addOrder=()=>{
      //   dispatch (addNewOrder(input.qty,input.adress,input.tel)) 
      //   console.log("inpuuuuuuuuuuuut",input)
      //   setShow(false)
      //   }
      
    return (
      <div className="d-flex justify-content-around flex-wrap" >
             {product.map((prod,key ) => (
                  <div className="mb-5" key={key}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" className="pt-3" src={prod.img}/>
                      <Card.Body>
                        <Card.Title>{prod.name}</Card.Title>
                        <Card.Text>{prod.price} $</Card.Text>
                        <Card.Text>{prod.description}</Card.Text>
                        <div className="d-flex justify-content-center">
                        <Button variant="dark" onClick={ () => {getFromCart(); addProductToCart(prod)}}>Add to cart</Button>

                        </div>
                      </Card.Body>
                    </Card>           
                  </div>
                ))
              }
            </div>
    )
}


