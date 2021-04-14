import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LoginUser, storeContext, LOADED, LOADING, load } from "../../State/State";
import { NavLink, Redirect } from 'react-router-dom';
import DashBoardNav from '../HEADER/DashBoardNav';
import ProfileDisplay from './ProfileDisplay';
import AccountDetails from './AccountDetails';
import "../../CSS/dashboard.css"
import PendingWithDraw from './PendingWithDraw';
import PendingDeposit from './PendingDeposit';
import RecentTransactions from './RecentTransactions';


function Dashboard(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const {logged} = storestate
    if (!logged) {
        return <Redirect to="/login" />
    }
    return (
        <div className="dashboard">
        <DashBoardNav/>
        <ProfileDisplay/>
        <div className="dashboardMain">
        <AccountDetails/>
        <PendingWithDraw/>
        <PendingDeposit/>
        </div>
        <RecentTransactions/>
            
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard

