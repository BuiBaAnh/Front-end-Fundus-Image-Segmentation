import './Navigation.css';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
const Navigation = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#features">Trang chủ</Nav.Link>
            <NavDropdown title="Ngôn ngữ" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Tiếng Việt</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tiếng Anh </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>   
            <Nav.Link eventKey={2} href="#memes">
                Đăng xuất
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;