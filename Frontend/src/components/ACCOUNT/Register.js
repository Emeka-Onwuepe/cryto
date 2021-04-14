import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect, NavLink } from 'react-router-dom';
import { storeContext, RegisterUser, ADD_ERROR, load, LOADED, LOADING } from '../../State/State';
import "../../CSS/form.css";


const RegisterAccount = (props) => {
    const { storestate, storedispatch } = useContext(storeContext);
    const initialState = {
        first_name: "", last_name: "", email: "", password: "", confirm_password: ""
    }
    const initialErrorState = {
        first_name: false, last_name: false, email: false
    }
    useEffect(() => {
        storedispatch(load(LOADED))
    }, []);
    const [formstate, setFormstate] = useState(initialState);
    const [errorstate, setErrorstate] = useState(initialErrorState);
    const { first_name, last_name, email, password, confirm_password } = formstate;
    let errorTest = {
        "name": /[^a-z\s]/i,
        "email": /^[a-z]+\d*[a-z]*@[a-z]+\.\w+\s*$/gi,
    }

    const onChange = (e) => {
        setFormstate({ ...formstate, [e.target.name]: e.target.value })
    }

    const onSubmit = e => {
        e.preventDefault();
        const { first_name, last_name, email, password, confirm_password } = formstate;
        const data = JSON.stringify({ first_name, last_name, email, "address": "null", password })
        const config = { headers: { "Content-Type": "application/json" } }
        const firstName = errorTest.name.test(first_name)
        const lastName = errorTest.name.test(last_name)
        const Email = !errorTest.email.test(email)

        setErrorstate(initialErrorState)
        if (password == confirm_password && !firstName && !lastName && !Email ) {
            RegisterUser(data, config).then(res => storedispatch(res))
            storedispatch(load(LOADING))
        } else if (password != confirm_password) {
            storedispatch({ type: ADD_ERROR, data: { "passwordError": "passwords did not match" } })
        }
        setErrorstate({ first_name: firstName, last_name: lastName, email: Email})
    }

    if (storestate.check) {
        return <Redirect to="/dashboard" />
    }
    return (
        <div className="formDiv">
        <fieldset>
            <form action="" method="post" onSubmit={onSubmit}>
            <div className="form">
            <label htmlFor="first_name">FIRST NAME</label>
                {errorstate.first_name ? <p className="error">Only alphabets are allowed</p> : ""}
                <input type="text" name="first_name" value={first_name} id="first_name" onChange={onChange} required />
                <label htmlFor="last_name">LAST NAME</label>
                {errorstate.last_name ? <p className="error">Only alphabets are allowed</p> : ""}
                <input type="text" name="last_name" value={last_name} id="last_name" onChange={onChange}  required />
                <label htmlFor="email">EMAIL</label>
                {errorstate.email ? <p className="error">Invalid Email</p> : ""}
                <input type="email" name="email" value={email} id="email" onChange={onChange} required />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" value={password} id="password" onChange={onChange}  required />
                <label htmlFor="confirm_password">CONFIRM PASSWORD</label>
                <input type="password" name="confirm_password" value={confirm_password} id="password" onChange={onChange}  required />
                <button className='submitButton' type="submit">REGISTER</button>
            </div>
                
            </form>
        </fieldset>

        </div>
    );
}

RegisterAccount.propTypes = {

};


export default RegisterAccount;
