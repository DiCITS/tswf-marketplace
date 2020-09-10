import React from "react"
import Statement, { GetStartedButton } from "../../components/features/Statement"
const Home = () => (
    <div className="mt-10 flex flex-col items-center pb-24">
        <Statement />        
        <GetStartedButton />
        <div className="h-64 grid grid-rows-1 grid-flow-col gap-4">
        <div className="bg-gray-200 rounded-lg">Total TSWF</div>
        <div >Methods included</div>
        <div >Full service composed</div>
        </div>
    </div>
)
export default Home