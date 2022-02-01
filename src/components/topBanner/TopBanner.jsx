import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/custom.css';
import '../../assets/css/bootstrap.min.css';
class TopBanner extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='topFixedBanner p-0'>
                    <div className="topBannerOverlay">
                        <Container className='topContent'>
                            <Row>
                                <Col className='textCenter'>
                                    <h1 className='topTitle'>Easy Learning</h1>
                                    <h4 className='topSubTitle'>Learn Profesional</h4>
                                    <Button variant="primary">Learn</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default TopBanner
