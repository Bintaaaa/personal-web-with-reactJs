import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import TopNavigation from '../topNavigation/TopNavigation'

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='topFixedPage p-0'>
                    <div className="topPageOverlay">
                        <Container className='topContentPage'>
                            <Row>
                                <Col className='textCenter'>
                                    <h4 className='topPageTitle'>{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        )
    }
}

export default PageTop
