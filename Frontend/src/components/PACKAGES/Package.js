import React from 'react'
import PropTypes from 'prop-types'
import "../../CSS/package.css"
import { NavLink } from 'react-router-dom'
function Package(props) {
  return (
    <div id="packages">
    <CoinbaseCommerceButton checkoutId={"e6c1115a-9aa0-4c33-97fd-fdb34e654163"}/>
            <div className="flip-card-front">
            <h3>BASIC</h3>
            <p><strong>$100</strong> Min Invest</p>
            <p><strong>$4,999</strong> Max Invest</p>
            <p><strong>3.5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <NavLink id="jionButton" to="/dashboard">JOIN</NavLink>
            </div>

            <div className="flip-card-front">
            <h3>CORPORATE</h3>
            <p><strong>$5,000</strong> Min Invest</p>
            <p><strong>$9,999</strong> Max Invest</p>
            <p><strong>5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <NavLink id="jionButton" to="/dashboard">JOIN</NavLink>
            </div>

            <div className="flip-card-front">
            <h3>EXECUTIVE</h3>
            <p><strong>$10,000</strong> Min Invest</p>
            <p><strong>$19,999</strong> Max Invest</p>
            <p><strong>6.5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <NavLink id="jionButton" to="/dashboard">JOIN</NavLink>
            </div>

            <div className="flip-card-front">
            <h3>DIAMOND</h3>
            <p><strong>$20,000</strong> Min Invest</p>
            <p><strong>NO LIMIT</strong> Max Invest</p>
            <p><strong>10%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <NavLink id="jionButton" to="/dashboard">JOIN</NavLink>
            </div>
   </div>
  )
}

Package.propTypes = {

}

export default Package

