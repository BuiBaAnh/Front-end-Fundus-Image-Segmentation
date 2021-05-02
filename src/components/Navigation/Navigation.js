import './Navigation.css';
import {Nav,Navbar,NavbarBrand,NavDropdown} from 'react-bootstrap';
import BK from '../../assets/BK.png';

const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img className = 'logo' src = {BK} alt = 'logo'/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#features"><b>Trang chủ</b></Nav.Link>
                <NavDropdown title="Ngôn ngữ" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1"><b>Tiếng Việt</b></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2"><b>Tiếng Anh</b> </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>   
                <Nav.Link eventKey={2} href="#memes">
                    <b>Đăng xuất</b>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;