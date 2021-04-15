import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import "../../CSS/dashboardnav.css"

function DashBoardNav(props) {
   
    return (
        <div className="boardnav">
        <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink to="dashboard/deposit">DEPOSIT</NavLink>
            <NavLink to="/dashboard">WITHDRAW</NavLink>
            <NavLink to="/dashboard">HISTORY</NavLink>
            <NavLink to="/dashboard">PROFILE</NavLink>
        </div>
    )
}

DashBoardNav.propTypes = {

}

export default DashBoardNav

