import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../assets/images/face.png'
import { init } from 'ityped'
class About extends Component {
    componentDidMount() {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Web Developer!', 'Online Instructor!', 'Android Developer!'] })
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <div className="text-center">
                        <h1 className='serviceTitle'>About Me</h1>
                        <div className="underlineOfServiceTitle"></div>
                    </div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutImage">
                                <img className='aboutMeImage' src={face} alt="" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className="aboutMeBody">
                                <h2 className="aboutMeDetails">HI There, I'm</h2>
                                <h2 className="aboutMeTitle">Bijantyum</h2>
                                <h3 className="aboutMeDetails">Work as <span id="myElement"> </span> </h3>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default About
