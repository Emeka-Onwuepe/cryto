import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { storeContext,sentenceCase, getIp } from '../../State/State';
import "../../CSS/profileDetails.css"

function ProfileDisplay(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const {User,ip}=storestate
    const {user} = User
    const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }

    useEffect(() => {
        
        getIp(config).then(ip=>storedispatch(ip))
    }, [])
    return (
        <div className="profileDetails">
            <p >Welcome, {sentenceCase(user.first_name)} {sentenceCase(user.last_name)}</p>
            <p>IP Address: {ip} </p>
            <p>Email: {user.email}</p>
        </div>
    )
}

ProfileDisplay.propTypes = {

}

export default ProfileDisplay

