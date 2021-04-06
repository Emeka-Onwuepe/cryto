import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import "../../CSS/nav.css"

function Nav(props) {
  return (
    <nav>

    <NavLink to="about">About</NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="faq">FAQ</NavLink>
    <NavLink to="rules">Rules</NavLink>
    <a id="logControl" href="">SIGN IN</a>

    </nav>
  )
}

Nav.propTypes = {

}

export default Nav

