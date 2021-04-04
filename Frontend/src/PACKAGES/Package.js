import React from 'react'
import PropTypes from 'prop-types'
import "../CSS/package.css"

function Package(props) {
  return (
    <div id="packages">
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <h3>BASIC</h3>
            <p><strong>$100</strong> Min Invest</p>
            <p><strong>$4,999</strong> Max Invest</p>
            <p><strong>3.5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <a id="jionButton" href="">JOIN</a>
            </div>
            <div className="flip-card-back">
            <h3><strong>$100</strong> Min Invest</h3>
            <h3><strong>$4,999</strong> Max Invest</h3>
            <a id="jionButtonBack" href="">JOIN</a>
            </div>
        </div>
        </div>

        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <h3>CORPORATE</h3>
            <p><strong>$5,000</strong> Min Invest</p>
            <p><strong>$9,999</strong> Max Invest</p>
            <p><strong>5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <a id="jionButton" href="">JOIN</a>
            </div>
            <div className="flip-card-back">
            <h3><strong>$5,000</strong> Min Invest</h3>
            <h3><strong>$9,999</strong> Max Invest</h3>
            <a id="jionButtonBack" href="">JOIN</a>
            </div>
        </div>
        </div>

        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <h3>EXECUTIVE</h3>
            <p><strong>$10,000</strong> Min Invest</p>
            <p><strong>$19,999</strong> Max Invest</p>
            <p><strong>6.5%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <a id="jionButton" href="">JOIN</a>
            </div>
            <div className="flip-card-back">
            <h3><strong>$10,000</strong> Min Invest</h3>
            <h3><strong>$19,999</strong> Max Invest</h3>
            <a id="jionButtonBack" href="">JOIN</a>
            </div>
        </div>
        </div>

        <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <h3>DIAMOND</h3>
            <p><strong>$20,000</strong> Min Invest</p>
            <p><strong>NO LIMIT</strong> Max Invest</p>
            <p><strong>10%</strong> Increment</p>
            <p><strong>Duration</strong> 5 Days</p>
            <p><strong>10%</strong> Referral Commission</p>
            <p><strong>Principle</strong> Included</p>
            <a id="jionButton" href="">JOIN</a>
            </div>
            <div className="flip-card-back">
            <h3><strong>$20,000</strong> Min Invest</h3>
            <h3><strong>NO LIMIT</strong> Max Invest</h3>
            <a id="jionButtonBack" href="">JOIN</a>
            </div>
        </div>
        </div>

   </div>
  )
}

Package.propTypes = {

}

export default Package

