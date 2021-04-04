import React, { Fragment, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import { storeContext } from '../State/State'
import Loading from './Loading';
import Package from '../PACKAGES/Package';
import Slides from "./SLIDES/Slides"


const Routes = ({ component: component, ...rest }) => {
    const { storestate } = useContext(storeContext);
    const { User, store } = storestate

    return (
        <Switch>
            <Route exact path='/' >
            <Slides/>
                <div className="wrapper">
                <Package/>
                </div>
            </Route>
            <Route exact path='/dashboard' >
                <div className="wrapper">
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
