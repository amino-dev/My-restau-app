import {Modal, Button, Form} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {addNewProduct} from "../../redux/actions/productActions"
// import { addProduct } from '../actions/products'



const AddProduct= () => {
  // const [products, setProducts] = useState({name: "", img: "" ,price: "", description: ""})
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [img, setImg] = useState("");
  // const [price, setPrice] = useState("");
  const [input,setInput]=useState({name:"",price:"", img:"" ,description:""})
  
const handleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}

const addProduct=()=>{
  dispatch (addNewProduct(input.name, input.price,input.img ,input.description)) 
  console.log("inpuuuuuuuuuuuut",input)
  setShow(false)
  }
  const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div className="mt-4">
        <Link to="/" className="ml-3 btn-icon dash-icon my-5"><FaHome/></Link>
        <div className="ml-3 mt-5">
          <Button variant="primary" onClick={handleShow}>
            Add a product
          </Button>
    
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add a product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="name" 
                     onChange={handleChange}
                     placeholder="Product Name" />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="url" name="img"
                     onChange={handleChange}
                     placeholder="Product Image" />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="text" name="description"
                     onChange={handleChange}
                     placeholder="Product Description" />
                </Form.Group>
                <Form.Group className="mb-3">
                     <Form.Control type="number" name="price" 
                      onChange={handleChange}
                     placeholder="Product Price" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={addProduct}>Post</Button>
            </Modal.Footer>
          </Modal>
        </div>

      </div>
       
      );
    }
    
  export default AddProduct