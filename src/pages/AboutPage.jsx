import React, { Component, Fragment } from 'react'
import AboutDescription from '../components/aboutDesc/AboutDescription'
import Footer from '../components/footer/Footer'
import PageTop from '../components/pageTop/PageTop'
import About from '../components/about/About'
import TopNavigation from '../components/topNavigation/TopNavigation'

class AboutPage extends Component {
    render() {
        return (
            <Fragment>
                <PageTop pageTitle="About Us" />
                <About />
                <AboutDescription />
            </Fragment>
        )
    }
}

export default AboutPage
