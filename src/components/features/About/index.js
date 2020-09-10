import React from "react"

const AuthorContact = ({email}) => (
   <p>{email}</p>
)

const AboutAuthor = () => (
    <p className="mx-auto w-1/2 pb-5 px-3 pt-2 mt-2">
         <span className="font-bold text-brand">Manuel Parra-Royón</span> hold a Ph.D. in Computer Sciences focused in Cloud Computing services and Data Mining.
        <AuthorContact email="manuel.parra@cern.ch"></AuthorContact>
    </p>
)    

const AboutSite= () => (
    <p className="xs:w-11/12 xs:mt-2 xs:pb-4 
    sm:w-1/2 sm:mt-4 sm:pb-6
    md:w-2/5 md:mt-4 md:pb-4
    lg:w-1/3 lg:mt-4 lg:pb-4
      mx-auto w-1/2 pb-5 px-3 pt-2 mt-2">                
        TSWF is an initiative to demonstrate the capability of semantic technologies for the definition and description of services based on Cloud Computing environments for the deployment of work flows with Time Series ready to consume, migrate or deploy independently of the underlying architecture or platform.
    </p>
)    

export {AboutAuthor,AboutSite}