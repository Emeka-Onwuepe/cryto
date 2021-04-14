import React from 'react'
import PropTypes from 'prop-types'
import "../../CSS/pendingpayment.css"

function PendingDeposit(props) {
    return (
        <div className="ppayment">
            <p>You don't have any pending dopsit(s)</p>
        </div>
    )
}

PendingDeposit.propTypes = {

}

export default PendingDeposit

