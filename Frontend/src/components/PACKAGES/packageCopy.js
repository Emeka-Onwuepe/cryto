import React from 'react'
import PropTypes from 'prop-types'
import "../../CSS/package.css"

function PackageCopy(props) {
  return (
    <div id="packages">
            <div className="flip-card-back">
            <h3>BASIC</h3>
            <p><strong>$100</strong> Min Invest</p>
            <p><strong>$4,999</strong> Max Invest</p>
            </div>
    
            <div className="flip-card-back">
            <h3>CORPORATE</h3>
            <p><strong>$5,000</strong> Min Invest</p>
            <p><strong>$9,999</strong> Max Invest</p>
            </div>

            <div className="flip-card-back">
            <h3>EXECUTIVE</h3>
            <p><strong>$10,000</strong> Min Invest</p>
            <p><strong>$19,999</strong> Max Invest</p>
            </div>

            <div className="flip-card-back">
            <h3>DIAMOND</h3>
            <p><strong>$20,000</strong> Min Invest</p>
            <p><strong>NO LIMIT</strong> Max Invest</p>
            </div>
   </div>
  )
}

PackageCopy.propTypes = {

}

export default PackageCopy

