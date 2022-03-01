import React, { Component, Fragment } from 'react'
import Contact from '../components/contact/Contact'
import PageTop from '../components/pageTop/PageTop'
import Service from '../components/service/Service'

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <PageTop pageTitle="Services" />
                <Service />
                <Contact />
            </Fragment>
        )
    }
}

export default ServicePage
