import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
import ecommerce from '../../assets/images/ecommerce.png';
import design from '../../assets/images/design.png';
import web from '../../assets/images/web.png';
class Service extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle'>MY SERVICES</h1>
                    <div className="underlineOfServiceTitle"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img src={ecommerce} alt="" className="ecommerceIcon" />
                                <h2 className='serviceCardTitle'>Ecommerce</h2>
                                <p className='serviceCardDescription'>I will design develop ecommerve online store</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>

                                <img src={design} alt="" className="designIcon" />
                                <h2 className='serviceCardTitle'>Web Design.</h2>
                                <p className='serviceCardDescription'>Qualified web design and atractive effects which cathes visitor's Eye.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className='serviceCard text-center'>
                                <img src={web} alt="" className="webIcon" />
                                <h2 className='serviceCardTitle'>Web Development</h2>
                                <p className='serviceCardDescription'>Clean and fresh issue free code to make your website dynamic perfectly</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Service
