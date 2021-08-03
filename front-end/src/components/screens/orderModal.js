import {addNewOrder} from "../../redux/actions/orderActions"
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
          <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add an order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
          
            <Form.Group className="mb-3">
                   <Form.Control type="number" name="tel"
                   onChange={handleChange}
                   placeholder="Client Tel" />
              </Form.Group>
              <Form.Group className="mb-3">
                   <Form.Control type="text" name="adress"
                   onChange={handleChange}
                   placeholder="Client Adress" />
              </Form.Group>
              
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={addOrder}>Post</Button>
          </Modal.Footer>
        </Modal>