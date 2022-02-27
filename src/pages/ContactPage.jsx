import React, { Component, Fragment } from 'react'
import Contact from '../components/contact/Contact'
import PageTop from '../components/pageTop/PageTop'

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <PageTop pageTitle="Contact Me" />
                <Contact />
            </Fragment>
        )
    }
}

export default ContactPage
