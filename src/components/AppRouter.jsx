import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from './NavBar';
import { HomePage } from './HomePage';
import { SeccionRopa } from './SeccionRopa';
import { Footer } from './Footer';

export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path={"/"} component={HomePage} />
                <Route exact path={"/Ropa"} component={SeccionRopa} />
            </Switch>
            <Footer />
        </Router>
    )
}
