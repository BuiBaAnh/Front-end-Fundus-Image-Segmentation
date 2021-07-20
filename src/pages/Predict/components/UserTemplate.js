import React from 'react';
import './Contribute.css'
import fundus from '../../../assets/fundus.png'
import axios from 'axios';
import { getToken } from '../../../components/Common';
import Translate from 'react-translate-component';

class UserTemplate extends React.Component{

    constructor(props){
        super(props);
        this.state = {

        }
    }
    delete = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('deleteUser', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.unloading(this.props.info.id)
            })
            .catch(error => {
                window.location.href = '/manageUser'
            })
            
    }
    add = () => {
        const token = getToken()
        const formData = new FormData()
        formData.append("id", this.props.info.id)
        this.props.loading()
        axios.post('addUser', formData, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            }})
            .then(res => {
                this.props.unloading(this.props.info.id)
            })
            .catch(error => {
                window.location.href = '/manageUser'
            })           
    }
    render(){
        return(
            <div className = "cardContribute">
                <div className = 'cardCont'>
                    <div className = "op">
                        UserName : {this.props.info.username}
                    </div>
                    <div className = "op">
                        Email : {this.props.info.email}
                    </div>
                    <div className = "op">
                        <Translate content = 'a_time'></Translate> : {this.props.info.time}
                    </div>
                    <div className = "option">
                    <button className = "but" onClick = {this.delete}>
                        <Translate content = 'a_delete'></Translate>
                    </button>
                    <button className = "but" onClick = {this.add}>
                        <Translate content = 'a_add'></Translate>
                    </button>
                </div>
                </div>
                <hr className = "new5"/>
            </div>
        )
    }
}
export default UserTemplate