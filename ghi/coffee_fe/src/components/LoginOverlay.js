import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from '../auth/Login'

function LoginOverlay() {

    return (
        <>
          <button type="button" className="btn" id="nav-button" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content" id="login-modal">
                    <span aria-hidden="true"></span>
                <div className="modal-body" style={{borderBottomColor:"#1F1B18"}}>
                  <Login />
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

export default LoginOverlay;
