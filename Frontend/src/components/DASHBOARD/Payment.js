import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { storeContext,sentenceCase, getIp } from '../../State/State';
import "../../CSS/profileDetails.css"
import CoinbaseCommerceButton from "react-coinbase-commerce"
import "react-coinbase-commerce/dist/coinbase-commerce-button.css"

function Payment(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const {url}=storestate

    useEffect(() => {
    }, [])

    

    return (
        <div>
        <p>hello world</p>
        <CoinbaseCommerceButton chargeId={"e6c1115a-9aa0-4c33-97fd-fdb34e654163"}/>
        <iframe src="https://commerce.coinbase.com/charges/QGF9ZF8J" frameborder="0" />
        </div>
  
    )
}

Payment.propTypes = {

}

export default Payment

