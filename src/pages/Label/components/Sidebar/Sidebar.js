import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Sidebar.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Translate from 'react-translate-component';
const Sidebar = (props) => {
    const url = window.location.href.split('/')
    const hr = url[url.length-1]
    return(
        <div>
            <SideNav 
            onSelect={(selected) => {
                props.handleOption(selected)
            }}
        >
            <SideNav.Toggle onClick={() => {
                props.handleMainMarginLeft()
            }} />
            <SideNav.Nav defaultSelected={hr}>
                <NavItem eventKey="AI">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Translate content = 'side1'></Translate>
                    </NavText>
                    <NavItem eventKey="AI/OD">
                        <NavText>
                            <Translate content = 'sub1' /> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/OC">
                        <NavText>
                            <Translate content = 'sub2' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/BV">
                        <NavText>
                            <Translate content = 'sub3' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/EX">
                        <NavText>
                            <Translate content = 'sub4' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/SE">
                        <NavText>
                            <Translate content = 'sub5' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/MA">
                        <NavText>
                            <Translate content = 'sub6' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/HE">
                        <NavText>
                            <Translate content = 'sub7' />
                        </NavText>
                    </NavItem>
                </NavItem>
                
                <NavItem eventKey="experiment">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Translate content = 'side2' />
                    </NavText>
                    <NavItem eventKey="experiment/OD">
                        <NavText>
                            <Translate content = 'sub1' /> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/OC">
                        <NavText>
                            <Translate content = 'sub2' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/BV">
                        <NavText>
                            <Translate content = 'sub3' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/EX">
                        <NavText>
                            <Translate content = 'sub4' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/SE">
                        <NavText>
                            <Translate content = 'sub5' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/MA">
                        <NavText>
                            <Translate content = 'sub6' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/HE">
                        <NavText>
                            <Translate content = 'sub7' />
                        </NavText>
                    </NavItem>
                </NavItem>

                <NavItem eventKey="contribute">
                    <NavIcon>
                        <i className="fa fa-hand-paper-o" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <Translate content = 'side3' />
                    </NavText>
                    <NavItem eventKey="contribute/OD">
                        <NavText>
                            <Translate content = 'sub1' /> 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/OC">
                        <NavText>
                            <Translate content = 'sub2' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/BV">
                        <NavText>
                            <Translate content = 'sub3' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/EX">
                        <NavText>
                            <Translate content = 'sub4' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/SE">
                        <NavText>
                            <Translate content = 'sub5' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/MA">
                        <NavText>
                            <Translate content = 'sub6' />
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/HE">
                        <NavText>
                            <Translate content = 'sub7' />
                        </NavText>
                    </NavItem>
                </NavItem>

            </SideNav.Nav>
        </SideNav>
        </div>
    )
}
export default Sidebar;