import React, { useContext, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storeContext, load, LOADING, LOADED, getExchange, addComas } from "../../State/State";
import "../../CSS/exchange.css"

function Exchange(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const  {btcexchange} = storestate
    const base= btcexchange.data.currency
    const rates= btcexchange.data.rates
   const displayRates=[]
   let count = 0

    for (const key in rates) {
        count+=1
        //const num = rates[key].toString()
        switch (key) {
            case "EUR":
            case "NZD":
            case "USD":
            case "ETC":
            case "USDC":
            case "ADA":
            case "ATOM":
            case "SSP":
            case "NGN":
            case "OMR":
            case "PEN":
            case "JPY":
            case "BTN":
            case "EGP":
            case "CAD":
            case "CZK":
               // console.log("key", addComas(num))
               
                displayRates.push(<p key={count}><span>{key}</span> {addComas(rates[key])}</p>)
                break;
            default:
                break;
        }    
    }


    useEffect(() => {
        console.log("ran inside interval")
        getExchange().then(res=>storedispatch(res))
    }, [btcexchange])

  return (
    <div className="exchange">
    <h3> BTC Exchange Rates </h3>  
    <div className="exchangerates">
    {console.log(displayRates)}
    {displayRates.map((rate,index)=>rate)}
    </div>
    
    
    </div>
  )
}

Exchange.propTypes = {

}

export default Exchange

