import React from 'react'
import PropTypes from 'prop-types'
import "../../CSS/nav.css"

function Nav(props) {
  return (
    <nav>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">FAQ</a>
      <a href="">Rules</a>
      <a id="logControl" href="">SIGN IN</a>

    </nav>
  )
}

Nav.propTypes = {

}

export default Nav

