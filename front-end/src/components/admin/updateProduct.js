import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateProduct} from "../../redux/actions/productActions"
import {useDispatch} from 'react-redux'
import {FaPen} from 'react-icons/fa'

const UpdateProduct = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setUpdate]=useState({name:el.name,price:el.price,img:el.img,description:el.description})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setUpdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Product

    const updatePr=()=>{
        dispatch (updateProduct(id,update.name, update.price,update.img ,update.description)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
<Button className="btn-icon dash-icon edit-icon" onClick={handleShow}><FaPen/></Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Update a product</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder="New Product Name" name='name' defaultValue={el.name}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>price</Form.Label>
<Form.Control type="text" placeholder="New Product Price"  name='price' defaultValue={el.price}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="New Product Image"  name='img'  defaultValue={el.img}   onChange={handleChange} />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>description</Form.Label>
<Form.Control type="text" placeholder="New Product Description"  name="description"  defaultValue={el.description}  onChange={handleChange} />
</Form.Group>
<div className="d-flex justify-content-end">
<Button className="mr-2 " variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatePr} >Update</Button>
</div>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateProduct