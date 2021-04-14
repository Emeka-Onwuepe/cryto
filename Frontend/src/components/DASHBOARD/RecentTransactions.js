import React from 'react'
import PropTypes from 'prop-types'
import "../../CSS/recenttransactions.css"

function RecentTransactions(props) {
    return (
        <div className="recentTransactions">
        <h3>RECENT TRANSACTIONS</h3>
        <p>You don't have any recent transaction</p>
            
        </div>
    )
}

RecentTransactions.propTypes = {

}

export default RecentTransactions

