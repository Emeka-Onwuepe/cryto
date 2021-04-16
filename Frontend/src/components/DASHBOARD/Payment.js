import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { storeContext,sentenceCase, getIp } from '../../State/State';
import "../../CSS/profileDetails.css"

function Payment(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const {url}=storestate

    useEffect(() => {
    }, [])

    return (
        <div>
        <p>hello world</p>
        <iframe src="https://commerce.coinbase.com/charges/QGF9ZF8J" frameborder="0" />
        </div>
  
    )
}

Payment.propTypes = {

}

export default Payment

