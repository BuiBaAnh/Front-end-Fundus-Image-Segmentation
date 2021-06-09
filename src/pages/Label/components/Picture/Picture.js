import React from 'react';
import './Picture.css';
import upload from '../../../../assets/upload.png';
import maskTest from '../../../../assets/maskTest.png';
import ModalBox from './components/ModalBox/ModalBox';

class Picture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option : '',
            image : '',
            mask : '',
            modalDisplay : false,
            _image : ''
        }
    }
    uploadFile = (event) => {
        event.preventDefault();
        if (event.target.files[0]){
            this.setState({
                image : URL.createObjectURL(new Blob([event.target.files[0], {type:'image/jpg'}]))
            })
        }
        event.target.value = '';
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
        this.setState((prevState, prevProps) =>({
            mask : maskTest,
        })
        )
    }
    insert = () => {
        this.setState({
            modalDisplay : true
        })
    }
    stopInsert = () => {
        this.setState({
            modalDisplay : false
        })
    }
    save = (msk) => {
        this.setState({
            mask : msk
        })
    }
    render(){
        return(
            <div className = 'picture'>
                <ModalBox image = {this.state.image} mask = {this.state.mask} show = {this.state.modalDisplay} onHide = {() => this.stopInsert()} save = {this.save}/>
                <div className = 'raw'>
                    <input type = "file" id = "file" style = {{display:'none'}} onChange = {(event) => this.uploadFile(event)} />
                    {this.state.image? 
                        this.state.mask?
                            <img src = {this.state.mask} className = 'fundus' onClick = {this.insert} /> :<img src = {this.state.image} className = 'fundus' /> : ''}
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
