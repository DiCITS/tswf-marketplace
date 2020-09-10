import React from "react"
import Statement, { GetStartedButton } from "../../components/features/Statement"
import {AboutAuthor,AboutSite} from "../../components/features/About"
const About = () => (
    <div className="mt-10 flex flex-col items-center pb-24">
        <AboutSite/>
        <AboutAuthor />
    </div>
)
export default About