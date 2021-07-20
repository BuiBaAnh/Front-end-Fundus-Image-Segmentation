import React from 'react';
import './Predict.css'
import Contribute from './components/Contribute';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import fundus from '../../assets/fundus.png'
import { getToken } from '../../components/Common';


class Predict extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            images : [],
            isLoad : true,
            isMask : false,
            isImage : false,
            image : '',
            mask : ''
        }
    }
    componentDidMount(){
        const token = getToken()
        axios.get('allWaiting', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                console.log(res.data)
                this.setState({
                    isLoad : false,
                    images : res.data
                })
            })
    }
    loading = () => {
        this.setState({
            isLoad : true
        })
    }
    unloading = (_id) => {
        const dataRemoved = this.state.images.filter((el) => {
            return el.id !== _id;
        });
        console.log(dataRemoved)
        this.setState({
            isLoad : false,
            images : dataRemoved
        })
    }
    destroyLoading = () => {
        this.setState({
            isLoad:false
        })
    }

    popUpMask = (mask) => {
        this.setState({
            isMask : true,
            mask :  `data:image/jpeg;base64,${mask}`
        })
    }
    onHideMask = () => {
        this.setState({
            isMask : false
        })
    }
    popUpImage = (image) => {
        this.setState({
            isImage : true,
            image :  `data:image/jpeg;base64,${image}`
        })
    }
    onHideImage = () => {
        this.setState({
            isImage : false
        })
    }
    
    render(){
        const listImage = this.state.images.map((project) =>
            <Contribute
                info = {project} 
                key = {project.id} 
                loading = {this.loading}
                destroyLoading = {this.destroyLoading}
                unloading = {this.unloading}
                onHideMask = {this.popUpMask}
                onHideImage = {this.popUpImage}
            / >                   
        )
        return(
            <div className = "cont1">
            <Modal size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered show = {this.state.isMask} 
                    >
            <Modal.Body style = {{backgroundColor : "white", display : "contents"}}>
                <img src ={this.state.mask} style = {{width : "50%", height : "auto", margin : "auto"}}>

                </img>
            </Modal.Body>
            <Modal.Footer style ={{border:"0px"}}>
            <Button variant='outline-info' onClick={() => {this.onHideMask();}} style = {{width:"100%"}}>
                Đóng
            </Button>
          </Modal.Footer>
            </Modal>
            <Modal size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered show = {this.state.isImage} 
                        >
                <Modal.Body style = {{backgroundColor : "white", display : "contents"}}>
                    <img src ={this.state.image} style = {{width : "50%", height : "auto", margin : "auto"}}>

                    </img>
                </Modal.Body>
                <Modal.Footer style ={{border:"0px"}}>
                <Button variant='outline-info' onClick={() => {this.onHideImage();}} style = {{width:"100%"}}>
                    Đóng
                </Button>
            </Modal.Footer>
            </Modal>
            {this.state.isLoad ?
                <div className = "waiting">
                    <div className="loader">
                    </div>
                    <h3>Loading</h3>
                </div>
                :
                <div className = "container">
                    {listImage}
                </div>
                }
            </div>
        )
    }
}
export default Predict