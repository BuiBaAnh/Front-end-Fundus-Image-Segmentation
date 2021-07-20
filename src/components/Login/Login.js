import React from 'react';
import './Login.css';
import {setUserSession, getLang} from '../Common';
import Translate from 'react-translate-component';
import axios from 'axios';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            isWrong : false,
            user : '',
            pass : '',
            repass : '',
            email : '',
            notAccept : false,
            success : false
        }
    }
    login = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)
        console.log(formData)
        axios.post('login', formData,  {
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(res =>{
                console.log("This is the data your requested", res);
                setUserSession(res.data.token, res.data.user_id);
                window.location.href = '/'
            })
            .catch(errors => {
                this.setState({
                    isWrong : true
                })
                console.log(errors)
            })
    }
    signup = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('user', this.state.user)
        formData.append('pass', this.state.pass)
        formData.append('email', this.state.email)
        console.log(this.state.username)
        if (this.state.pass !== this.state.repass ||this.state.user === '' || this.state.pass === ''){
            this.setState({
                notAccept : true
            })
        }
        else{
            axios.post('signup', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                },
                })
                .then(res =>{
                    this.setState({
                        success : true,
                        notAccept : false
                    })
                    window.location.href = '/'
                })
                .catch(errors => {
                    console.log(errors)
                })
        }
    }
    handleUsername = (event) => {
        event.preventDefault()
        this.setState({
            username : event.target.value
        })
    }   
    handlePassword = (event) => {
        event.preventDefault()
        this.setState({
            password : event.target.value
        })
    }   
    handleUser = (event) => {
        event.preventDefault()
        this.setState({
            user : event.target.value
        })
    }   
    handlePass = (event) => {
        event.preventDefault()
        this.setState({
            pass : event.target.value
        })
    }   
    handleRepass = (event) => {
        event.preventDefault()
        this.setState({
            repass : event.target.value
        })
    }   
    handleEmail = (event) => {
        event.preventDefault()
        this.setState({
            email : event.target.value
        })
    }   

    render(){
        return(
            <div className="login-wrap" >
                <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab"><Translate content = 'signin'></Translate></label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"><Translate content = 'signup'></Translate></label>
                <div className="login-form" >
                    <div className="sign-in-htm">
                    <div className="group" onChange = {this.handleUsername}>
                        <label htmlFor="user" className="label"><Translate content = 'username'></Translate></label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group" onChange = {this.handlePassword}>
                        <label htmlFor="pass" className="label"><Translate content = 'password'></Translate></label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" defaultChecked />
                        <label htmlFor="check"><span className="icon" /> <Translate content = 'check'></Translate></label>
                    </div>
                    <div className="group" >
                        <input type="submit" className="button" value = {getLang() === 'vi'? 'ĐĂNG NHẬP' : 'SIGN IN'}  onClick = {this.login}/>
                    </div>
                    {this.state.isWrong ? 
                        <div className="foot-lnk">
                        <a href="#forgot"><Translate content = 'a_login'></Translate></a>
                        </div> : ''}
                    <div className="hr" />
                    {/* <div className="foot-lnk">
                        <a href="#forgot"><Translate content = 'forgot'></Translate></a>
                    </div> */}
                    </div>
                    <div className="sign-up-htm">
                    <div className="group" onChange = {this.handleUser}>
                        <label htmlFor="user" className="label"><Translate content = 'username'></Translate></label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group" onChange = {this.handlePass}>
                        <label htmlFor="pass" className="label"><Translate content = 'password'></Translate></label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group" onChange = {this.handleRepass}>
                        <label htmlFor="pass" className="label"><Translate content = 'repeat'></Translate></label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group"  onChange = {this.handleEmail}>
                        <label htmlFor="pass" className="label"><Translate content = 'email'></Translate></label>
                        <input id="pass" type="text" className="input" />
                    </div>
                    {this.state.success ? 
                        <div className="foot-lnk">
                        <a href="#forgot">Chờ đợi sự đồng ý từ Admin</a>
                        </div> : ''}
                    {this.state.notAccept ? 
                        <div className="foot-lnk">
                        <a href="#forgot"><Translate content = 'a_signup'></Translate></a>
                        </div> : ''}
                    <div className="group" onClick = {this.signup}>
                        <input type="submit" className="button" value = {getLang() === 'vi'? 'ĐĂNG KÝ' : 'SIGN UP'} />
                    </div>
                    <div className="hr" />
                    <div className="foot-lnk">
                        <label htmlFor="tab-1">
                        </label></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login