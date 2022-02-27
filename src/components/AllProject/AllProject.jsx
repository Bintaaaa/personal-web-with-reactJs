import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
class AllProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 className='serviceTitle'>Recent Project</h1>
                    <div className="underlineOfServiceTitle"></div>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <Card className=' projectCard'>
                                <Card.Img variant="top" src={require('../../assets/images/page3.png')} />
                                <Card.Body>
                                    <Card.Title className='serviceCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='serviceCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className='text-center projectCard'>
                                <Card.Img variant="top" src={require('../../assets/images/page3.png')} />
                                <Card.Body>
                                    <Card.Title className='serviceCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='serviceCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <Card className='text-center projectCard'>
                                <Card.Img variant="top" src={require('../../assets/images/page3.png')} />
                                <Card.Body>
                                    <Card.Title className='serviceCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='serviceCardDescription'>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default AllProject
