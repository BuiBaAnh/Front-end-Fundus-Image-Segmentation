import React, {useState} from 'react';
import Sidebar from '../Label/components/Sidebar/Sidebar';
import Main from '../Label/components/Main/Main';

class Label extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            mainMarginLeft : 'unextended',
            option : 'home'
        }
    }
    handleMainMarginLeft = () => {
        if(this.state.mainMarginLeft === 'unextended'){
            this.setState({
                mainMarginLeft : 'extended'
            })
        }
        else{
            this.setState({
                mainMarginLeft : 'unextended'
            })
        }
    }
    handleOption = (option) => {
        this.setState({
            option : option
        })
    }
    render(){
        return(
            <div className = 'label' style={{position: 'relative', height: 'calc(100vh)', minHeight : 'calc(50vh)'}}>
                <Sidebar 
                    handleMainMarginLeft = {this.handleMainMarginLeft}
                        handleOption = {this.handleOption}
                    />
                <Main 
                    mainMarginLeft = {this.state.mainMarginLeft} option = {this.state.option}
                        option = {this.state.option}
                    />
            </div>
        )
    }
}

export default Label;