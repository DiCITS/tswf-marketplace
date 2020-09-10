import React from "react"
import { Switch, Route } from "react-router-dom"
import Home, {
    LoginPage,
    MarketPlacePage,
    AboutPage
} from "../../../pages"

const Switcher = () => (
    <Switch>
        <Route path="/marketplace">
            <MarketPlacePage />
        </Route>
        <Route path="/about">
            <AboutPage />
        </Route>        
        <Route path="/login">
            <LoginPage />
        </Route>
        <Route path="/">
            <Home />
        </Route>
    </Switch>)

export default Switcher