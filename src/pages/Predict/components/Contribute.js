import React from 'react';
import './Contribute.css'
import fundus from '../../../assets/fundus.png'
import axios from 'axios';
import { getToken } from '../../../components/Common';
import Translate from 'react-translate-component';

class Contribute extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isMask : false,
            isImage : false
        }
    }
    delete = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('delete', formData,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.unloading(this.props.info.id)
            })
            .catch(error => {
                window.location.href = '/manageContribute'
            })
            
    }
    add = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('add', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.unloading(this.props.info.id)
            })
            .catch(error => {
                window.location.href = '/manageContribute'
            })           
    }
    mask = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('mask', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.destroyLoading()
                this.props.onHideMask(res.data)
            })
            .catch(error => {
                window.location.href = '/manageContribute'
            })     
    }
    image = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('image', formData,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.destroyLoading()
                this.props.onHideImage(res.data)
            })
            .catch(error => {
                window.location.href = '/manageContribute'
            })     
    }
    render(){
        return(
            <div className = "cardContribute">
                <div className = 'cardCont'>
                    <img src = {fundus} className = "opImg">

                    </img>
                    <div className = "op">
                        <Translate content = 'a_type'></Translate> : {this.props.info.type}
                    </div>
                    <div className = "op">
                        <Translate content = 'a_time'></Translate> : {this.props.info.time}
                    </div>
                    <div>
                    <button className = "but" onClick = {this.image}>
                        Image
                    </button>
                    <button className = "but" onClick = {this.mask}>
                        Mask
                    </button>
                    </div>
                </div>
                <hr className = "new5"/>
                <div className = "option">
                    <button className = "but" onClick = {this.delete}>
                        <Translate content = 'a_delete'></Translate>
                    </button>
                    <button className = "but" onClick = {this.add}>
                        <Translate content = 'a_add'></Translate>
                    </button>
                </div>
            </div>
        )
    }
}
export default Contribute