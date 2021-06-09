import './Sidebar.css';
import {reset, resetAll} from '../../../../../../components/dragscroll';


const Sidebar = (props) => {
    return (
        <div>
            <nav className="main-menu">
                <ul>
                <li>
                    <a href="#" onClick = {() => {props.handleOption('insert','crosshair'); resetAll(); props.draw()}}>
                    <i className="fa fa-pencil fa-2x" />
                    <span className="nav-text">
                        Chỉnh sửa   
                    </span>
                    </a>
                </li>
                <li className="has-subnav">
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('zoomin','zoom-in'); reset();}}> 
                    <i className="fa fa-search-plus fa-2x" />
                    <span className="nav-text">
                        Phóng to
                    </span>
                    </a>
                </li>
                <li className="has-subnav">
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('zoomout','zoom-out'); reset();}}>
                    <i className="fa fa-search-minus fa-2x" />
                    <span className="nav-text">
                        Thu nhỏ
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('undo','auto'); resetAll();props.undo()}}>
                    <i className="fa fa-undo fa-2x" />
                    <span className="nav-text">
                        Quay lại
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('delete','grabbing'); resetAll();props.erase()}}>
                    <i className="fa fa-eraser fa-2x" />
                    <span className="nav-text">
                        Xóa
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); props.restart(); resetAll();}}>
                    <i className="fa fa-image fa-2x" />
                    <span className="nav-text">
                        Nguyên bản
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); props.restart(); resetAll(); props.loadMask()}}>
                    <i className="fa fa-file-image-o" />
                    <span className="nav-text">
                        Hủy chỉnh sửa
                    </span>
                    </a>
                </li>
                <li>
                    <a href="#" onClick = {() => {props.resetDraw();props.handleOption('raw','auto'); props.restart(); resetAll(); props.save()}}>
                    <i className="fa fa-floppy-o" />
                    <span className="nav-text">
                        Lưu
                    </span>
                    </a>
                </li>
                </ul>        
            </nav>
        </div>
      );
}

export default Sidebar;