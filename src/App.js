import React, { useState, useEffect } from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Label from './pages/Label/Label';
import Navigation from '../src/components/Navigation/Navigation';
import Login from '../src/components/Login/Login';
import {BrowserRouter, Route} from 'react-router-dom';
import { getToken, removeUserSession } from './components/Common';


const App = () => {
  const [isLog, setIsLog] = useState(false);
 
    useEffect(() => {
      const token = getToken();
      if (token) {
        setIsLog(true)
      }
    }, []);

 
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path ='/' component = {MainPage}/>
        <Route path = '/AI'  component = {isLog ? Label : Login }  />
        <Route path = '/experiment' component = {isLog ? Label : Login} />
        <Route path = '/contribute' component = {isLog ? Label : Login} />
        <Route path = '/login' component = {Login} />
      </BrowserRouter>
    </div>
  )
}

export default App;
