import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import './ModalBox.css';

class ModalBox extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        option:'',
        cursor : 'auto',
        width : "0px"
      }
      this.ref = React.createRef()
    }
    handleOption = (option,cursor) => {
      this.setState({
        option:option,
        cursor:cursor
      })
    }
    zoomin = () => {
      var currWidth = this.ref.current.clientWidth;
      this.ref.current.style.width = (currWidth + 150) + "px";
    }
    zoomout = () => {
      var currWidth = this.ref.current.clientWidth;
      if(currWidth == 150) return false;
      else{
        this.ref.current.style.width = (currWidth - 150) + "px";
      }
    }
    zoom = (event) => {
      event.preventDefault();
      if(this.state.width === "0px"){
        this.setState({
          width:this.ref.current.clientWidth+"px"
        })
      }
      if(this.state.option === 'zoomin'){
        this.zoomin();
      }
      if(this.state.option === 'zoomout'){
        this.zoomout();
      }
    }
    restart = () => {
      this.ref.current.style.width = this.state.width
    }

    render(){
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div className = "modalBox-content">
            <Sidebar handleOption = {this.handleOption} restart = {this.restart}/>
            <div className = "main dragscroll">
              <img className = "fundusInsert" 
                src = {this.props.mask} 
                style = {{cursor:this.state.cursor}}
                ref = {this.ref} onDoubleClick= {(event) => this.zoom(event)} >                  
              </img>
            </div>
          </div>  
  
          <Modal.Footer style ={{border:"0px"}}>
            <Button variant='outline-info' onClick={() => {this.props.onHide(); this.setState({option:'', cursor:'auto'})}} style = {{width:"100%"}}>Đóng</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
export default ModalBox