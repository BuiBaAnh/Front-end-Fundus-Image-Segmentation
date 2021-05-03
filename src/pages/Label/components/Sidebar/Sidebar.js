import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Sidebar.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
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
                        Hỗ trợ chuẩn đoán AI
                    </NavText>
                    <NavItem eventKey="AI/OD">
                        <NavText>
                            Đĩa 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/OC">
                        <NavText>
                            Cốc
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/BV">
                        <NavText>
                            Mạch máu
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/HD">
                        <NavText>
                            Xuất tiết cứng
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="AI/SD">
                        <NavText>
                            Xuất tiết mềm
                        </NavText>
                    </NavItem>
                </NavItem>
                
                <NavItem eventKey="experiment">
                    <NavIcon>
                        <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Thử nghiệm
                    </NavText>
                    <NavItem eventKey="experiment/OD">
                        <NavText>
                            Đĩa 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/OC">
                        <NavText>
                            Cốc
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/BV">
                        <NavText>
                            Mạch máu
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/HD">
                        <NavText>
                            Xuất tiết cứng
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="experiment/SD">
                        <NavText>
                            Xuất tiết mềm
                        </NavText>
                    </NavItem>
                </NavItem>

                <NavItem eventKey="contribute">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Đóng góp Cơ sở dữ liệu
                    </NavText>
                    <NavItem eventKey="contribute/OD">
                        <NavText>
                            Đĩa 
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/OC">
                        <NavText>
                            Cốc
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/BV">
                        <NavText>
                            Mạch máu
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/HD">
                        <NavText>
                            Xuất tiết cứng
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="contribute/SD">
                        <NavText>
                            Xuất tiết mềm
                        </NavText>
                    </NavItem>
                </NavItem>

            </SideNav.Nav>
        </SideNav>
        </div>
    )
}
export default Sidebar;