import React from 'react';
import Picture from '../Picture/Picture';
import './Main.css';

class Main extends React.Component{
    render(){
        return(
            <div className = "mainLabel" style = {{marginLeft:this.props.mainMarginLeft === 'extended' ? '240px' : '64px'}}>
                <Picture option = {this.props.option}/>
            </div>
        )
    }
}

export default Main;