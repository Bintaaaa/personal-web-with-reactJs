import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import whiteLogo from '../../assets/images/logo_white.png';
import blackLogo from '../../assets/images/logo_black.png';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navbarBrand: "navBrand",
            navbarLogo: [whiteLogo],
            navbarBg: "navBg",
            navbarVariant: "navItem",
            navVar: 'dark'
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navbarBrand: "navBrandScroll", navbarLogo: [blackLogo], navbarBg: "navBgScroll", navbarVariant: "navItemScroll", navVar: 'light'
            });
        } else if (window.screenY < 100) {
            this.setState({
                navbarBrand: "navBrand", navbarLogo: [whiteLogo], navbarBg: "navBg", navbarVariant: "navItem", navVar: 'dark'
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navbarBg} collapseOnSelect fixed="top" expand="lg" variant={this.state.navVar}>
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navbarBrand}><img src={this.state.navbarLogo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="justify-content-end" style={{ width: "100%" }}>
                                <Nav.Link>
                                    <NavLink exact={true} activeStyle={{
                                        fontWeight: "bold",
                                        color: "#3ffd900"
                                    }} to="/" className={this.state.navbarVariant}>Home</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to="/about" className={this.state.navbarVariant}>About</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to="/service" className={this.state.navbarVariant}>Service</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to="/course" className={this.state.navbarVariant}>Course</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to="/portofolio" className={this.state.navbarVariant}>Portofolio</NavLink>
                                </Nav.Link>
                                <Nav.Link>
                                    <NavLink to="/contact" className={this.state.navbarVariant}>Contact </NavLink>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
