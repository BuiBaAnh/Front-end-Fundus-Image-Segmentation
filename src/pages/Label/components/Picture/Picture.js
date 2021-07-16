import React from 'react';
import './Picture.css';
import upload from '../../../../assets/upload.png';
import ModalBox from './components/ModalBox/ModalBox';
import { ProgressBar, Modal } from 'react-bootstrap';
import Alert from './components/Alert/Alert';
import axios from 'axios';
import Translate from 'react-translate-component';
import AI from '../../../../assets/AI.jpg';
import { getToken } from '../../../../components/Common';

const ip = 'localhost'
// const url = 'http://' + ip + ':5000'
const url = 'https://3a5ff23be8df.ngrok.io'

class Picture extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            option : '',
            image : '',
            mask : '',
            modalDisplay : false,
            _image : '',
            uploadPercentage : 0,
            onPop : false,
            detail : '',
            alert : '',
            fileType : 'image',
            imgTest : false
        }
    }
    uploadFile = (event) => {
        event.preventDefault();
        if (event.target.files[0]){
            this.setState({
                _image : event.target.files[0],
                image : URL.createObjectURL(new Blob([event.target.files[0], {type:'image/jpg'}])),
                name_file : event.target.files[0].name
            })
        }
        const typeImg = ['jpg', 'jpeg', 'png', 'bmp', 'tif']
        if (!typeImg.includes(event.target.files[0].name.split('.').pop())){
            this.setState({
                fileType : 'zip'
            })
        }
        else{
            this.setState({
                fileType : 'image'
            })
        }
        event.target.value = '';
    }
    cancelFile = (event) => {
        event.preventDefault();
        if (this.state.uploadPercentage > 0){
            return false
        }
        else{
            this.setState({
                image : false,
                mask : false,
                _image : false,
                imgTest : false,
                uploadPercentage : 0,
                fileType : 'image'
            })
        }
    }
    predict = (event) => {
        const token = getToken();
        event.preventDefault();
        const formData = new FormData();
        console.log(this.props.option)
        if (this.props.option === 'home'){
            this.setState({
                onPop : true,
                alert : <Translate content = 'al1.title'></Translate>,
                detail : <Translate content = 'al1.sub'></Translate>
            })
            return false
        }
        if (this.props.option.split('/')[0] === 'AI'){
            const typeImg = ['jpg', 'jpeg', 'png', 'bmp', 'tif']
            if (!typeImg.includes(this.state.name_file.split('.').pop())){
                this.setState({
                    onPop : true,
                    alert : <Translate content = 'all2.title'></Translate>,
                    detail : <Translate content = 'al2.sub'></Translate>,
                    image : false,
                    mask : false,
                    imgTest : false,
                    _image : false,
                    name_file : '',
                    uploadPercentage : 0,
                    fileType : 'image'

                })
                return false;
            }
        }
        if (this.props.option.split('/')[0] === 'experiment' || this.props.option.split('/')[0] === 'contribute'){
            if (this.state.name_file.split('.').pop() !== "zip"){
                this.setState({
                    onPop : true,
                    alert : <Translate content = 'al3.title'></Translate>,
                    detail : <Translate content = 'al3.sub'></Translate>,
                    image : false,
                    mask : false,
                    imgTest : false,
                    _image : false,
                    name_file : '',
                    uploadPercentage : 0,
                    fileType : 'image'

                })
                return false;
            }
        }

        const setPercent = setInterval(() => {
            var num_per = this.state.uploadPercentage
            num_per = num_per + 1
            if( num_per < 100 ){
                this.setState({ uploadPercentage: num_per })
            }
            else{
                this.setState({
                    uploadPercentage : 99
                })
                clearInterval(setPercent)
            }
        }, 150)

        if (this.props.option === 'AI/OD'){
            console.log(this.state._image)
            formData.append("segOD",this.state._image)
            axios.post('segOD', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent

                })
                .then(res =>{
                    console.log(res)
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        mask: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }
        if (this.props.option === 'AI/OC'){
            formData.append("segOC",this.state._image)
            axios.post('segOC', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent
                })
                .then(res =>{
                    console.log(res)
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        mask: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }
        if (this.props.option === 'experiment/OD'){
            formData.append("expOD",this.state._image)
            axios.post('expOD', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent
                })
                .then(res =>{
                    if (res.data === "NumFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Cần đúng 2 file ảnh : fundus và mask`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "NameFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Tên file không đúng : fundus... và mask...`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        imgTest: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }
        if (this.props.option === 'experiment/OC'){
            formData.append("expOC",this.state._image)
            axios.post('expOC', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent
                })
                .then(res =>{
                    if (res.data === "NumFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Cần đúng 2 file ảnh : fundus và mask`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "NameFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Tên file không đúng : fundus... và mask...`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        imgTest: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }


        //Contribute Database
        if (this.props.option === 'contribute/OC'){
            formData.append("conOC",this.state._image)
            axios.post('conOC', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent
                })
                .then(res =>{
                    if (res.data === "NumFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Cần đúng 2 file ảnh : fundus và mask`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "NameFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Tên file không đúng : fundus... và mask...`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "success"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al4.title'></Translate>,
                            detail : <Translate content = 'al4.sub'></Translate>,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        imgTest: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }
        if (this.props.option === 'contribute/OD'){
            formData.append("conOD",this.state._image)
            axios.post('conOD', formData,  {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ token 
                },
                onUploadProgress: setPercent
                })
                .then(res =>{
                    if (res.data === "NumFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Cần đúng 2 file ảnh : fundus và mask`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "NameFileError"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al3.title'></Translate>,
                            detail : `Tên file không đúng : fundus... và mask...`,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    if (res.data === "success"){
                        this.setState({
                            onPop : true,
                            alert : <Translate content = 'al4.title'></Translate>,
                            detail : <Translate content = 'al4.sub'></Translate>,
                            image : false,
                            mask : false,
                            imgTest : false,
                            _image : false,
                            name_file : '',
                            uploadPercentage : 0,
                            fileType : 'image'
        
                        })
                    }
                    clearInterval(setPercent)
                    this.setState({
                        uploadPercentage : 0,
                        imgTest: `data:image/jpeg;base64,${res.data}`
                    })
                })
                .catch(errors => {
                    window.location.href = '/login'
                })
        }
        

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
    onPopup = () => {
        this.setState({
            onPop : false,
            alert : '',
            detail : '',
            mask : false,
            // _image : false,
            imgTest : false
        })
    }

    render(){
        return(
            <div className = 'picture'>
                <Alert alert = {this.state.alert} detail = {this.state.detail} onShow = {this.state.onPop} onPopup = {this.onPopup}></Alert>
                <ModalBox image = {this.state.image} mask = {this.state.mask} show = {this.state.modalDisplay} onHide = {() => this.stopInsert()} save = {this.save}/>
                <div className = 'raw'>
                    <input type = "file" id = "file" style = {{display:'none'}} onChange = {(event) => this.uploadFile(event)} />
                    {this.state.fileType === 'image' ? 
                    (this.state.image? 
                        this.state.mask?
                            <img src={this.state.mask} className = 'fundus' onClick = {this.insert} /> :<img src = {this.state.image} className = 'fundus' /> : '')
                    :this.state.imgTest ? 
                    <img src = {this.state.imgTest} className = 'fundus'></img> 
                    :
                    <div className = 'fileName'>
                        <i className="fa fa-files-o" style={{ fontSize: '300%' , margin : "3vh"}} />
                        {this.state.name_file}
                    </div> 
                    }
                    {this.state.image ? '': (<img src = {upload} className = 'upImg' alt = 'upload'/>)}
                    {this.state.image ? ''
                        :
                        <button className = 'upload' onClick = {() => {return document.getElementById("file").click()}} >
                            {this.state.image && !this.state.mask ? <Translate content = 'btn_pred'></Translate> : <Translate content = 'btn_up'></Translate>}
                        </button>
                    }
                </div>
                { this.state.uploadPercentage > 0 && <ProgressBar className = "progress" striped variant="info" animated now={this.state.uploadPercentage}  label={this.state.uploadPercentage.toString() + '%'} /> }<br/>
                <div style = {{width:"60%", marginBottom:"3vh"}}>
                {this.state.image ? 
                        <div className = 'lstbutton'>
                            {this.state.mask || this.state.imgTest? 
                                <a href = {this.state.mask? this.state.mask : this.state.imgTest} download="mask.png" style = {{display:"grid", width:"25%"}}>
                                <button className = 'download'>
                                <Translate content = 'btn_save'></Translate>
                                </button>
                                </a>
                                :
                                <button className = 'upload' style = {{backgroundColor:"#00838d"}} onClick = {(event) => this.predict(event)} >
                                <Translate style = {{color:"white"}} content = 'btn_pred'></Translate>
                                </button>}
                            <button className = 'upload' onClick = {(event) => this.cancelFile(event)} >
                                <Translate content = 'btn_exit'></Translate>
                            </button>
                        </div>
                        : ''
                }
                </div>
            </div>
        )
    }
}
export default Picture;
