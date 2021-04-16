import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { storeContext, sentenceCase, DashBoard, GET_ACCOUNT, GET_TRANSACTIONS } from '../../State/State';
import "../../CSS/accountdetails.css"

function AccountDetails(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const { withdraws, deposits, account } = storestate
    useEffect(() => {
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
        const data = { "action": "GET_ACCOUNT" }
        const data2 = { "action": "GET_TRANSACTIONS" }
        DashBoard(data, config, GET_ACCOUNT).then(res => storedispatch(res))
        DashBoard(data2, config, GET_TRANSACTIONS).then(res => console.log(res))

    }, []);

    console.log(parseFloat('0.00'))

    return ( 
        <div className = "accountDetails" >
        <div>
        <p> TOTAL DEPOSIT: <span> $ { account.amount } </span> </p>
        </div> 
        <div>
        <p> EARNED INTEREST: <span> $ { account.earned_profits } </span></p>
        </div> 
        <div>
        <p> ACCOUNT BALANCE: <span> $ { account.amount == "0.00" ? account.amount : parseFloat(account.amount) + parseFloat(account.earned_profits) } </span></p>
        </div> </div>
    )
}

AccountDetails.propTypes = {

}

export default AccountDetails