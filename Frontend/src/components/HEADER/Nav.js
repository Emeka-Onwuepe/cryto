import React,{useContext} from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
import "../../CSS/nav.css"
import { LogOut,load,LOADING, storeContext } from '../../State/State';

function Nav(props) {
  const { storestate, storedispatch } = useContext(storeContext);
  const {logged}=storestate
  const logout = (e) => {
        e.preventDefault;
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
        LogOut(null, config).then(res => storedispatch(res))
        storedispatch(load(LOADING))
      }
  return (
    <nav>

    <NavLink to="about">About</NavLink>
    <NavLink to="contact">Contact</NavLink>
    <NavLink to="faq">FAQ</NavLink>
    <NavLink to="rules">Rules</NavLink>
    <NavLink to="/dashboard">Account</NavLink>
    <p id="logControl" className="log">{logged?<NavLink onClick={logout} to="/login">LOG OUT</NavLink>: <NavLink  to="/login">LOGIN</NavLink> }</p>

    </nav>
  )
}

Nav.propTypes = {

}

export default Nav

