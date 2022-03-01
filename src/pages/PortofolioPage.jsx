import React, { Component, Fragment } from 'react'
import AllProject from '../components/AllProject/AllProject'
import PageTop from '../components/pageTop/PageTop'
class PortofolioPage extends Component {
    render() {
        return (
            <Fragment>
                <PageTop pageTitle="Our Portofolio" />
                <AllProject />
            </Fragment>
        )
    }
}

export default PortofolioPage
