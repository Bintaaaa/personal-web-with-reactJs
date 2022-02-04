import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactPlayer from 'react-player'
class Video extends Component {
    constructor() {
        super();
        this.state = {
            show: false,

        }
    }

    modalClose = () => this.setState({ show: false });
    modalOpen = () => this.setState({ show: true });

    render() {
        return (
            <Fragment>
                <Container >
                    <div className="text-center">
                        <h1 className='serviceTitle'>Our Video</h1>
                        <div className="underlineOfServiceTitle"></div>
                    </div>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <p className='videoText'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt quidem repellat voluptas quae mollitia odit
                                itaque consequuntur dolore, possimus odio perferendis ratione recusandae voluptatibus. Odio ab ipsa sed accusantium sint laboriosam alias non doloribus expedita? Et, nisi minus. Rerum quidem excepturi, non vel voluptas sed
                                nostrum perspiciatis maxime odio ad esse saepe odit cumque dolorum modi mollitia. Doloribus, dolorem!
                                <br /><br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt quidem repellat voluptas quae mollitia odit
                                itaque consequuntur dolore, possimus odio perferendis ratione recusandae voluptatibus. Odio ab ipsa sed accusantium sint laboriosam alias non doloribus expedita? Et, nisi minus. Rerum quidem excepturi, non vel voluptas sed
                                nostrum perspiciatis maxime odio ad esse saepe odit cumque dolorum modi mollitia. Doloribus, dolorem!
                            </p>
                        </Col>
                        <Col lg={6} md={6} sm={12} className='videoCard text-center'>
                            <FontAwesomeIcon className='iconProject' icon={faVideoSlash} onClick={this.modalOpen}></FontAwesomeIcon>
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ReactPlayer width='100%' url='https://youtu.be/mKk_htyyVSs' />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        )
    }
}

export default Video
