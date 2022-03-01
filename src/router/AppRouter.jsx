import React, { Component, Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoursePage from '../pages/CoursePage'
import HomePage from '../pages/HomePage'
import PortofolioPage from '../pages/PortofolioPage'
import ServicePage from '../pages/ServicePage'
class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/about' element={<AboutPage />} />
                    <Route path='/service' element={<ServicePage />} />
                    <Route path='/course' element={<CoursePage />} />
                    <Route path='/portofolio' element={<PortofolioPage />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Routes>
            </Fragment>
        )
    }
}

export default AppRouter
