import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { LoginUser, storeContext, LOADED, LOADING, load } from "../../State/State";
import { NavLink, Redirect } from 'react-router-dom';
import "../../CSS/form.css"
import "../../CSS/login.css"

const Login = (props) => {
    const { storestate, storedispatch } = useContext(storeContext);
    const{screenWidth,logged} = storestate
    let location = window.location.origin
    const [cords, setcords] = useState({})


    useEffect(() => {
        const container= document.querySelector(".wrapper")
        const getcords= container.getBoundingClientRect()
        setcords(getcords)
      }, [screenWidth])
    const initialState = {
        email: "", password: ""
    }

    useEffect(() => {
        storedispatch(load(LOADED))
    }, []);

    const style= {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width:"100%",
        height:cords.height==undefined?500:cords.height-55,
        justifyContent: "center",
    }

    const style2= {
        display: "flex",
        flexDirection: "column",
        width:300
    }

  

    const [formstate, setFormstate] = useState(initialState);
    const { email, password } = formstate;

    const onChange = (e) => {
        setFormstate({ ...formstate, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();
        const { email, password } = formstate;
        const data = JSON.stringify({"data":{ email, password },"action":"publisher"})
        const config = { headers: { "Content-Type": "application/json" } }
        LoginUser(data, config).then(res => storedispatch(res))
        storedispatch(load(LOADING))
    }
    if (logged) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="formDiv">
        <fieldset style={style}>
        
            <form  action="" method="post" onSubmit={onSubmit} style={style2}>
            <div className="form">
            <label htmlFor="email">EMAIL</label>
                <input  type="email" name="email" value={email} id="email" onChange={onChange} placeholder="" />
                <label htmlFor="password">PASSWORD</label>
                <input type="password" name="password" value={password} id="password" onChange={onChange} placeholder="" />
                <button className='submitButton' type="submit">LOGIN</button>
        </div>
            </form>
            <div className="signing">
            <p>
            <NavLink className="headspan" to="/register">SIGN UP</NavLink>
            </p>
            
             <p className='restPassword' ><a style={{color:"#9E9E9E"}} className="headspan" target="blank" href={`${location}/password_reset`}>FORGOT PASSWORD</a></p>
            </div>
        </fieldset>
        </div>
      
    );
}

Login.propTypes = {

};


export default Login;
