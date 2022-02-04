import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class ReviewClient extends Component {
    render() {
        var settings = {
            autoPlaySpeed: 3000,
            autoPlay: true,
            dots: true,
            infinite: true,
            speed: 3000,
            arrows: false,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container fluid={true} className="sliderBack">
                    <div className="text-center">
                        <h1 className='reviewTitle'>Testimonial</h1>
                        <div className="underlineOfReviewTitle"></div>
                    </div>
                    <Slider {...settings}>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg" />
                                    <h2 className="reviewName">Kazi Ariyan</h2>
                                    <p className="reviewDescription">Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row className='text-center justify-content-center'>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="circleImg" src="https://image.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg" />
                                    <h2 className="reviewName">Kazi Ariyan</h2>
                                    <p className="reviewDescription">Hi! I'm Kazi Ariyan. I'm a web developer with a serious love for teaching I am a founder of eLe easy Learning and a passionate Web Developer, Programmer & Instructor.</p>
                                </Col>
                            </Row>
                        </div>

                    </Slider>

                </Container>
            </Fragment>
        )
    }
}

export default ReviewClient
