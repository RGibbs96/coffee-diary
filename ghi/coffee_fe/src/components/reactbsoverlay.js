import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreateBrewedCoffee from '../common/Create/CreateBrewedCoffee';

function ReactBsOverlay(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalLong" style={{fontFamily:"Inter"}}>
        Create New Brew
      </button>

      <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document" id="general-modal">
          <div className="modal-content" id="general-modal">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <span aria-hidden="true">&times;</span>
            </div>
            <div className="modal-body">
              <CreateBrewedCoffee
                methods={props.props.methods}
                beans={props.props.beans}
                waterBlends={props.props.waterBlends}
                grinders={props.props.grinders}
                brewers={props.props.brewers}
                sweeteners={props.props.methods}
                creamers={props.props.methods}
                brewedCoffees={props.props.brewedCoffees}
                fetchBrewedCoffees={props.props.fetchBrewedCoffees}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactBsOverlay
