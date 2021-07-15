import './Navigation.css';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import BK from '../../assets/BK.png';
import {getToken, removeUserSession, setLang, getLang} from '../Common';
import en from '../../lang/en';
import vi from '../../lang/vi';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import { useState } from 'react';
counterpart.registerTranslations('vi',vi);
counterpart.registerTranslations('en',en);

const Navigation = () => {
    const lang = getLang();
    if (!lang){
        setLang('vi');
        counterpart.setLocale('vi');
    }
    else{
        counterpart.setLocale(lang)
    }
    const [language, setLanguage] = useState(getLang() ==='vi'? 'Ngôn ngữ' : 'Language')

    const logout = () => {
        removeUserSession();
    }
    const langVi = () => {
        setLang('vi');
        counterpart.setLocale('vi');
        setLanguage('Ngôn ngữ')
    }
    const langEn = () => {
        setLang('en');
        counterpart.setLocale('en');
        setLanguage('Language')
    }
    
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <img className = 'logo' src = {BK} alt = 'logo'/>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/"><b><Translate content = 'homepage'></Translate></b></Nav.Link>
                <NavDropdown title={language} id="collasible-nav-dropdown">
                    <NavDropdown.Item onClick = {langVi}><b><Translate content = 'vietnamese'></Translate></b></NavDropdown.Item>
                    <NavDropdown.Item  onClick = {langEn}><b><Translate content = 'english'></Translate></b> </NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>   
                <Nav.Link eventKey={2} href="login" onClick = {logout}>
                    {getToken() ? <b><Translate content = 'log.logout'></Translate></b> : <b><Translate content = 'log.login'></Translate></b>}
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navigation;