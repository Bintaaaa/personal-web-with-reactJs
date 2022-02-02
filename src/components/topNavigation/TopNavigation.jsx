import React, { Component, Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import whiteLogo from '../../assets/images/logo_white.png';
import blackLogo from '../../assets/images/logo_black.png';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
class TopNavigation extends Component {
    constructor() {
        super();
        this.state = {
            navbarBrand: "navBrand",
            navbarLogo: [whiteLogo],
            navbarBg: "navBg",
            navbarVariant: "navItem"
        }
    }

    onScroll = () => {
        if (window.scrollY > 100) {
            this.setState({
                navbarBrand: "navBrandScroll", navbarLogo: [blackLogo], navbarBg: "navBgScroll", navbarVariant: "navItemScroll"
            });
        } else if (window.screenY < 100) {
            this.setState({
                navbarBrand: "navBrand", navbarLogo: [whiteLogo], navbarBg: "navBg", navbarVariant: "navItem"
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }
    render() {
        return (
            <Fragment>
                <Navbar fixed='top' expand="lg" variant={this.navbarVariant} className={this.state.navbarBg}>
                    <Container>
                        <Navbar.Brand href="#home" className={this.state.navbarBrand}><img src={this.state.navbarLogo} /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" >
                            <Nav className="justify-content-end" style={{ width: "100%" }}>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>Home</Nav.Link>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>About</Nav.Link>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>Service</Nav.Link>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>Course</Nav.Link>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>Portofolio</Nav.Link>
                                <Nav.Link href="#home" className={this.state.navbarVariant}>Contact </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        )
    }
}

export default TopNavigation
