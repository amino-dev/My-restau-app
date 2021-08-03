import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateOrder} from "../../redux/actions/orderActions"
import {useDispatch} from 'react-redux'
import {FaPen} from 'react-icons/fa'

const UpdateOrder = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setUpdate]=useState({status: el.status})
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

    const updateAnOrder=()=>{
        dispatch (updateOrder(id,update.status)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container pt-4'>
<Button className="btn-icon dash-icon edit-icon" onClick={handleShow}><FaPen/></Button>
<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Update an order</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >

<Form.Group controlId="formBasicPassword">
<Form.Label>Order status</Form.Label>
<Form.Control type="text" placeholder="New Order Status"  name="status"  defaultValue={el.status}  onChange={handleChange} />
</Form.Group>
<div className="d-flex justify-content-end">
<Button className="mr-2 " variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updateAnOrder} >Update</Button>
</div>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateOrder