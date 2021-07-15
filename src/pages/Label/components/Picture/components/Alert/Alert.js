import {Modal, Button} from 'react-bootstrap';
import {useState} from 'react';
import './Alert.css';


function Alert(props) {
      
    return (
      <div className = "alert">
        <Modal show={props.onShow} onHide={props.onPopup}>
          <Modal.Header closeButton style = {{backgroundColor : "white"}}>
            <Modal.Title>{props.alert}</Modal.Title>
          </Modal.Header>
          <Modal.Body style = {{backgroundColor : "white"}}>{props.detail}</Modal.Body>
        </Modal>
      </div>
    );
  }
  
export default Alert;