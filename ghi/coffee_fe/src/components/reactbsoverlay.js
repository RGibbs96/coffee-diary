import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateBrewedCoffee from '../common/CreateBrewedCoffee';

function ReactBsOverlay(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add brewed coffee
      </Button>

      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Brew</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <CreateBrewedCoffee
             methods={props.props.methods}
             beans={props.props.beans}
             waterBlends={props.props.waterBlends}
             grinders={props.props.grinders}
             brewers={props.props.brewers}
             sweeteners={props.props.methods}
             creamers={props.props.methods}
             fetchBrewedCoffees={props.props.fetchBrewedCoffees}

             />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReactBsOverlay
