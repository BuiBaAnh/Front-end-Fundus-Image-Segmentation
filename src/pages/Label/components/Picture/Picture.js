import React from 'react';
import './Picture.css';
import upload from '../../../../assets/upload.png';
import maskTest from '../../../../assets/maskTest.png';

class Picture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option : '',
            image : false,
            mask : false
        }
    }
    uploadFile = (event) => {
        event.preventDefault();
        if (event.target.files[0]){
            this.setState({
                image : URL.createObjectURL(event.target.files[0])
            })
        }
    }
    cancelFile = (event) => {
        event.preventDefault();
        this.setState({
            image : false,
            mask : false
        })
    }
    predict = (event) => {
        event.preventDefault();
        this.setState({
            image : maskTest,
            mask : true
        })
    }
    render(){
        console.log(this.state.image)
        return(
            <div className = 'picture'>
                <div className = 'raw'>
                    <input type = "file" id = "file" style = {{display:'none'}} onChange = {(event) => this.uploadFile(event)} />
                    {this.state.image? <img src = {this.state.image} className = 'fundus'/> :''}
                    {this.state.image ? '': (<img src = {upload} className = 'upImg' alt = 'upload'/>)}
                    {this.state.image ? ''
                        :
                        <button className = 'upload' onClick = {() => {return document.getElementById("file").click()}} >
                            {this.state.image && !this.state.mask ? 'Chuẩn đoán' : 'Tải ảnh'}
                        </button>
                    }
                </div>
                {this.state.image ? 
                        <div className = 'lstbutton'>
                            {this.state.mask ? 
                                <button className = 'upload' onClick = {(event) => this.predict(event)} >
                                Lưu
                                </button>
                                :
                                <button className = 'upload' onClick = {(event) => this.predict(event)} >
                                Chuẩn đoán
                                </button>}
                            <button className = 'upload' onClick = {(event) => this.cancelFile(event)} >
                                Hủy
                            </button>
                        </div>
                        : ''
                }
            </div>
        )
    }
}
export default Picture;