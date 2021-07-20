import React from 'react';
import './Predict.css'
import UserTemplate from './components/UserTemplate';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import fundus from '../../assets/fundus.png'
import { getToken } from '../../components/Common';


class User extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            images : [],
            isLoad : true,
        }
    }
    componentDidMount(){
        const token = getToken()
        axios.get('allUserWaiting', {
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

    
    render(){
        const listImage = this.state.images.map((project) =>
            <UserTemplate
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
export default User