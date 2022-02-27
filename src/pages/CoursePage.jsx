import React, { Component, Fragment } from 'react'
import AllCourses from '../components/allCourse/AllCourses'
import PageTop from '../components/pageTop/PageTop'

class CoursePage extends Component {
    render() {
        return (
            <Fragment>
                <PageTop pageTitle="Course" />
                <AllCourses />
            </Fragment>
        )
    }
}

export default CoursePage
