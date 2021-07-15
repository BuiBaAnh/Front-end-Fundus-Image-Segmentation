import React from 'react';
import './Login.css';
import {setUserSession, getLang} from '../Common';
import Translate from 'react-translate-component';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    login = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        console.log("cc")
        setUserSession("abc","anh");
        window.location.href = '/'
    }

    render(){
        return(
            <div className="login-wrap" >
                <div className="login-html">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab"><Translate content = 'signin'></Translate></label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab"><Translate content = 'signup'></Translate></label>
                <div className="login-form" >
                    <div className="sign-in-htm">
                    <div className="group">
                        <label htmlFor="user" className="label"><Translate content = 'username'></Translate></label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
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
                    <div className="hr" />
                    <div className="foot-lnk">
                        <a href="#forgot"><Translate content = 'forgot'></Translate></a>
                    </div>
                    </div>
                    <div className="sign-up-htm">
                    <div className="group">
                        <label htmlFor="user" className="label"><Translate content = 'username'></Translate></label>
                        <input id="user" type="text" className="input" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label"><Translate content = 'password'></Translate></label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label"><Translate content = 'repeat'></Translate></label>
                        <input id="pass" type="password" className="input" data-type="password" />
                    </div>
                    <div className="group">
                        <label htmlFor="pass" className="label"><Translate content = 'email'></Translate></label>
                        <input id="pass" type="text" className="input" />
                    </div>
                    <div className="group">
                        <input type="submit" className="button" value = {getLang() === 'vi'? 'ĐĂNG NHẬP' : 'SIGN IN'} />
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