import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { storeContext } from '../State/State'
import Loading from './Loading';
import Package from './PACKAGES/Package';
import Slides from "./SLIDES/Slides"
import AboutUs from './US/AboutUs';
import Rules from './US/Rules';
import Contact from './US/Contact';
import Faq from './FAQ/Faq'
import Exchange from './EXCHANGE/Exchange';
import RegisterAccount from './ACCOUNT/Register';
import Login from "./ACCOUNT/Login"
import Dashboard from './DASHBOARD/Dashboard';
import DashBoardNav from './HEADER/DashBoardNav';


const Routes = ({ component: component, ...rest }) => {
    const { storestate } = useContext(storeContext);
    const { User, store } = storestate

    return (
        <Switch>
            <Route exact path='/' >
            <Slides/>
                <div className="wrapper">
                <Package/>
                <Exchange/>
                </div>
            </Route>
            <Route exact path='/about' >
                <div className="wrapper">
                <AboutUs/>
                </div>
            </Route>
            <Route exact path='/rules' >
                <div className="wrapper">
                <Rules/>
                </div>
            </Route>
            <Route exact path='/contact' >
                <div className="wrapper">
                <Contact/>
                </div>
            </Route>
            <Route exact path='/faq' >
                <div className="wrapper">
                <Faq/>
                </div>
            </Route>
            <Route exact path='/register' >
                <div className="wrapper">
                <RegisterAccount/>
                </div>
            </Route>
            <Route exact path='/login' >
                <div className="wrapper">
                <Login/>
                </div>
            </Route>
            <Route exact path='/dashboard' >
                <div className="wrapper">
                <Dashboard/>
                </div>
            </Route>
            <Route  >
            <div className="wrapper">
            Page not found
                </div>
            </Route>
        </Switch>
    );
};


Routes.propTypes = {

};


export default Routes;
