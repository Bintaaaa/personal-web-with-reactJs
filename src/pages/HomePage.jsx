import React, { Component } from 'react'
import { Fragment } from 'react'
import About from "../components/about/About";
import Analisyst from "../components/analisyst/Analisyst";
import Course from "../components/course/Course";
import RecentProject from "../components/recent/RecentProject";
import ReviewClient from "../components/review/ReviewClient";
import Service from "../components/service/Service";
import Summery from "../components/summery/Summery";
import TopBanner from "../components/topBanner/TopBanner";
import Video from "../components/video/Video";
class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopBanner />
                <Service />
                <Analisyst />
                <Summery />
                <RecentProject />
                <Course />
                <Video />
                <ReviewClient />
                <About />
            </Fragment>
        )
    }
}

export default HomePage
