import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import "../../CSS/Header.css"
import { NavLink,useLocation } from 'react-router-dom'

function Header(props) {
  let location = useLocation()
  const test = /(dashboard)/.test(location.pathname)
  return (
    <header>

    <NavLink to={test?"/dashboard":"/"}>
    <div id="logo">
    <img src="/static/css/logo.png"  width="100%" alt="logo"/>
    </div>
    </NavLink>
    <Nav/>
      
    </header>
  )
}

Header.propTypes = {

}


export default Header


