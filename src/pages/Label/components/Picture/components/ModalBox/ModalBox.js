import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import './ModalBox.css';
import {init, color, draw, save, resetInsert, Undo, resetPath} from '../../../../../../components/canvasdraw';
import Translate from 'react-translate-component';

class ModalBox extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        option:'',
        cursor : 'auto',
        width : "55%",
        zoom : 0,
        size : 4.0,
        sizeErase : 10.0
      }
      this.ref = React.createRef();
      this.ref1 = React.createRef();
    }
    
    handleOption = (option,cursor) => {
      this.setState({
        option:option,
        cursor:cursor
      })
    }
    zoomin = () => {
      var currWidth = this.ref.current.style.width;
      this.ref.current.style.width = (parseInt(currWidth) + 15)+"%";
      this.ref1.current.style.width = (parseInt(currWidth) + 15)+"%";
    }
    zoomout = () => {
      var currWidth = this.ref.current.style.width;
      if(currWidth == "15%") return false;
      else{
        this.ref.current.style.width = (parseInt(currWidth) - 15)+"%";
        this.ref1.current.style.width = (parseInt(currWidth) - 15)+"%";
      }
    }
    zoom = async () => {
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

    erase = () => {
      this.setState({
        zoom : this.ref.current.getBoundingClientRect().width/this.ref.current.width
      },() =>{
        init(this.ref1.current,this.ref.current.width,this.ref.current.height, this.state.zoom, this.state.size,this.state.sizeErase,"erase");
      })
    }

    draw = () => {
      this.setState({
        zoom : this.ref.current.getBoundingClientRect().width/this.ref.current.width
      },() =>{
        init(this.ref1.current,this.ref.current.width,this.ref.current.height, this.state.zoom, this.state.size, this.state.sizeErase,"draw");
      })
      
    }

    resetDraw = () => {
      resetInsert(this.ref1.current);
    }

    restart = () => {
      this.ref.current.style.width = this.state.width;
      this.ref1.current.style.width = this.state.width;
      setTimeout(() => {
        this.setState({
          zoom : this.ref.current.getBoundingClientRect().width/this.ref.current.width
        })
      },600)
    }
    save = () => {
      this.props.save(this.ref1.current.toDataURL())
    }

    loadMask = (image,mask) => {
      new Promise((resolve, reject) => {
        var img = new Image();
        img.src = image;
        img.onload = () => {
          const canvas  = this.ref.current;
          const ctx = canvas.getContext("2d");
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img,0,0);
          var imgMask = new Image();
          imgMask.src = mask;
          const canvasMask  = this.ref1.current;
          canvasMask.width = imgMask.width;
          canvasMask.height = imgMask.height
          const ctxMask = canvasMask.getContext("2d");
          ctxMask.drawImage(imgMask,0,0);
  
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const imageDataMask = ctxMask.getImageData(0, 0, canvasMask.width, canvasMask.height);
          const data = imageData.data;
          const dataMask = imageDataMask.data;
          ctx.putImageData(imageData, 0, 0);
          this.setState({
            zoom : this.ref.current.getBoundingClientRect().width/this.ref.current.width,
          })
        }
      })
    }
    undo = (mask) => {
      var imgMask = new Image();
      imgMask.src = mask;
      imgMask.onload = () => {
        const canvasMask  = this.ref1.current;
        canvasMask.width = canvasMask.width;
        canvasMask.height = canvasMask.height
        const ctxMask = canvasMask.getContext("2d");
        ctxMask.drawImage(imgMask,0,0);
        Undo();
      }
    }

    resetPath = () => {
      resetPath();
    }
    setSizeInsert = (size) => {
      this.setState({
        size : size
      },() =>{
        init(this.ref1.current,this.ref.current.width,this.ref.current.height, this.state.zoom, this.state.size, this.state.sizeErase, "draw");
      })
    }
    setSizeErase = (size) => {
      this.setState({
        sizeErase : size
      },() =>{
        init(this.ref1.current,this.ref.current.width,this.ref.current.height, this.state.zoom, this.state.size,this.state.sizeErase, "erase");
      })
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
            <Sidebar loadMask = {() => {this.loadMask(this.props.image, this.props.mask)}} 
                      handleOption = {this.handleOption} 
                      restart = {this.restart} 
                      draw = {this.draw} 
                      resetDraw = {this.resetDraw}
                      erase = {this.erase}
                      undo = {() => this.undo(this.props.mask)} 
                      save = {this.save}
                      resetPath = {this.resetPath}
                      setSizeInsert = {this.setSizeInsert}
                      setSizeErase = {this.setSizeErase}
                      />
            <div className = "main dragscroll">
              <img onLoad = {() => {this.loadMask(this.props.image, this.props.mask)} } src = {this.props.mask} style = {{display:"none"}}></img>
              {/* <img onLoad = {() => {this.loadMask(this.props.mask)}} src = {maskTest} style = {{display:"none"}}></img> */}
              <div className = "canvasImg">
                <canvas 
                  className = "fundusInsert" 
                  style = {{cursor:this.state.cursor, width:"55%", height:"auto"}}
                  ref = {this.ref}  >                  
                </canvas>
                <canvas className = "fundusMask" 
                  id="myCanvas"
                  style = {{cursor:this.state.cursor, width:"55%", height:"auto", opacity:".4"}}
                  ref = {this.ref1} onDoubleClick = {(event) => this.zoom(event)}>                  
                </canvas>
              </div>
              <script>
                loadMask()
              </script>
            </div>
          </div>  
  
          <Modal.Footer style ={{border:"0px"}}>
            <Button variant='outline-info' onClick={() => {this.props.onHide(); this.setState({option:'', cursor:'auto'})}} style = {{width:"100%"}}>
                <Translate content = 'op9'></Translate>
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }
  
export default ModalBox