import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Label from './pages/Label/Label';
import Navigation from '../src/components/Navigation/Navigation';
import {BrowserRouter, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Route exact path ='/' component = {MainPage}/>
        <Route path = '/AI' component = {Label} />
        <Route path = '/experiment' component = {Label} />
        <Route path = '/contribute' component = {Label} />
      </BrowserRouter>
    </div>
  );
}

export default App;
