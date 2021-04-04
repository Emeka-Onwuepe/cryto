import React from 'react'
import PropTypes from 'prop-types'
import Nav from './Nav'
import "../../CSS/Header.css"

function Header(props) {
  return (
    <header>
    <div id="logo">
    <img src="/static/css/logo.png"  width="100%" alt="logo"/>
    </div>

    <Nav/>
      
    </header>
  )
}

Header.propTypes = {

}


export default Header


