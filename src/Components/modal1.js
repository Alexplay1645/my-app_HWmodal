import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function Example1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-outline-primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal show = {show} onHide ={handleClose}  >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body> */}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

