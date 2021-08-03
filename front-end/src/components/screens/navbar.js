import logo from '../../img/logo.png'
import {Navbar, Nav, Form, FormControl, Button,Modal,Badge} from "react-bootstrap"
import {FaSearch,FaUserCheck, FaUserPlus,FaShoppingCart} from 'react-icons/fa'
import { Link } from "react-router-dom"
import React, {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'


function NavBar({cart}){
 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const cartState = useSelector(state => state.cartReducer)
  return(
<div className="mb-5">
<Navbar id="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
  <Navbar.Brand>Aminoo Restau</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Form inline className="ml-auto search">
      <Button  className="button my-auto" variant="outline-dark"><FaSearch/></Button>
      <FormControl type="text" placeholder="Search" className=" mr-sm-2"/>
    </Form>
    <Nav className="ml-auto">
        <Link className="nav-link" to="/">Home</Link>
        <Link>
        <Button className="button-sign my-auto" variant="outline-dark" onClick={handleShow}>
         <FaUserCheck className="mb-2"/>
        </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control type="text" 
                name="username"
                placeholder="Username"/>
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="Password"
                placeholder="User password" />
          </Form.Group> 
          <div className="d-flex justify-content-center">
          <Button className="connection-button my-auto px-3 py-2">
            Sign in
          </Button>
          </div>
        </Modal.Body>
      </Modal>
        </Link>
        <Link>
        <Button className="button-sign" variant="outline-dark" onClick={handleShow1}>
         <FaUserPlus className="mb-2"/>
        </Button>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>
           Registration
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control type="text" 
                name="name"
                placeholder="Name" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" 
                name="username"
                placeholder="Username" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="email" 
                name="email"
                placeholder="User email" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" 
                name="role"
                placeholder="Role" />
          </Form.Group>
          <Form.Group>
            <Form.Control type="text" name="Password"
                placeholder="User password" />
          </Form.Group> 
          <div className="d-flex justify-content-center">
          <Button className="connection-button my-auto px-3 py-2">
            Sign up
          </Button>
          </div>
        </Modal.Body>
      </Modal>
      </Link>
      <Link className="nav-link" to="/restauApp/cart">
     
         <FaShoppingCart  className="mb-2" /><Badge variant="secondary">{cart}</Badge>
      </Link>
     
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
  ) 
}
export default NavBar

