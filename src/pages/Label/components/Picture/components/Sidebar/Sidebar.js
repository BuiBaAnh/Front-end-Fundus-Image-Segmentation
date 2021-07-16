import './Sidebar.css';
import {reset, resetAll} from '../../../../../../components/dragscroll';
import {useEffect, useState} from 'react';
import Translate from 'react-translate-component';

const Sidebar = (props) => {
    const [hideInsert, setHideInsert] = useState(true);
    const openInsertSize = () => {
        setHideInsert(!hideInsert);
    }
    const [hideErase, setHideErase] = useState(true);
    const openEraseSize = () => {
        setHideErase(!hideErase);
    }
    const [sizeInsert, setSizeInsert] = useState('');
    const changeSize = (event) => {
        props.setSizeInsert(event.target.value);
        setSizeInsert(event.target.value);
        props.handleOption('insert','crosshair');
    }
    const [sizeErase, setSizeErase] = useState('');
    const changeSizeErase = (event) => {
        props.setSizeErase(event.target.value);
        setSizeErase(event.target.value);
        props.handleOption('delete','grabbing');
    }
    return (
        <div>
            <nav className="main-menu">
                <ul>
                <li>
                    <a href="#" onClick = {() => {openInsertSize(); props.handleOption('insert','crosshair'); resetAll(); props.draw();}}>
                    <i className="fa fa-pencil fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op1'></Translate>  
                    </span>
                    </a>
                </li>
                {hideInsert? '' : 
                <input type = 'text' 
                    placeholder = "0.5, 1.0, 2.0, ..."  
                    value = {sizeInsert}
                    onChange = {(event) => changeSize(event)}></input>
                }
                <li className="has-subnav">
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('zoomin','zoom-in'); reset();}}> 
                    <i className="fa fa-search-plus fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op2'></Translate>  
                    </span>
                    </a>
                </li>
                <li className="has-subnav">
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('zoomout','zoom-out'); reset();}}>
                    <i className="fa fa-search-minus fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op3'></Translate>  
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('undo','auto'); resetAll();props.undo()}}>
                    <i className="fa fa-undo fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op4'></Translate>  
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {openEraseSize();props.resetDraw();props.handleOption('delete','grabbing'); resetAll();props.erase()}}>
                    <i className="fa fa-eraser fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op5'></Translate>  
                    </span>
                    </a>
                </li>
                {hideErase? '' : 
                <input type = 'text' 
                    placeholder = " 0.5, 1.0, 2.0, ..."  
                    value = {sizeErase}
                    onChange = {(event) => changeSizeErase(event)}></input>
                }
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); props.restart(); resetAll();}}>
                    <i className="fa fa-image fa-2x" />
                    <span className="nav-text">
                        <Translate content = 'op6'></Translate>  
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); props.restart(); resetAll(); props.loadMask(); props.resetPath()}}>
                    <i className="fa fa-file-image-o" />
                    <span className="nav-text">
                        <Translate content = 'op7'></Translate> 
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); resetAll(); props.save()}}>
                    <i className="fa fa-floppy-o" />
                    <span className="nav-text">
                        <Translate content = 'op8'></Translate>  
                    </span>
                    </a>
                </li>
                </ul>        
            </nav>
        </div>
      );
}

export default Sidebar;