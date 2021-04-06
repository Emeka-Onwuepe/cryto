import React, { useContext, useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { storeContext, load, LOADING, LOADED, sendMail } from "../../State/State";
import { Redirect } from 'react-router-dom';
import '../../CSS/form.css'
import "../../CSS/contact.css"

function Contact(props) {
    const { storestate, storedispatch } = useContext(storeContext);

    useEffect(() => {
        storedispatch(load(LOADED))
    }, []);

    const initialState = {
        full_name: '', subject: '', email: '', message: ""
    }
    const initialErrorState = {
        full_name: false, subject: false, phone_number: false, email: false
    }
    const [formstate, setFormstate] = useState(initialState);
    const [errorstate, setErrorstate] = useState(initialErrorState);
    const { full_name, subject, phone_number, email, message } = formstate;
    let errorTest = {
        "full_name": /[^a-z\s]/i,
        "email": /^[a-z]+\d*[a-z]*@[a-z]+\.\w+\s*$/gi,
        "message": /[^a-z\s.,;':)(0-9"#_-]/i,
        "subject": /[^a-z\s.,;':)(0-9"#_-]/i,
    }


    const onChange = (e) => {
        setFormstate({ ...formstate, [e.target.name]: e.target.value })
    }
    const onSubmit = e => {
        e.preventDefault();

        const { full_name, subject, phone_number, email, message } = formstate;
        const phone = errorTest.phone_number.test(phone_number)
        const fullName = errorTest.full_name.test(full_name)
        const subjectTest = errorTest.subject.test(subject)
        const Email = !errorTest.email.test(email)
        const data = JSON.stringify({ full_name, subject, email, message })
        const config = { headers: { "Content-Type": "application/json" } }

        setErrorstate(initialErrorState)
        if (!fullName && !subjectTest && !phone && !Email) {
            sendMail(data, config).then(res => storedispatch(res))
            storedispatch(load(LOADING))
        }
        setErrorstate({ full_name: fullName, subject: subjectTest, phone_number: phone, email: Email })
    }

    if (storestate.messages == "Your Message was sent successfully") {
        return <Redirect to="/" />
    }
  return (
      
    <div className="contact">
    <div className="contactText">
    <h2>Support Desk </h2>
      <p>We are there to Support you 24/7 except on Weekends Saturday and Sunday we are off.</p>
    </div>
      
      <div className="formDiv">
      <fieldset >
                <legend>CONTACT US</legend>
                <form action="" method="post" onSubmit={onSubmit}>
                <div className="form">
                <label htmlFor="full_name">FULL NAME</label>
                    {errorstate.full_name ? <p className="error">Only alphabets are allowed</p> : ""}
                    <input type="text" name="full_name" value={full_name} id="full_name" onChange={onChange}  required />
                    <label htmlFor="email">EMAIL</label>
                    {errorstate.email ? <p className="error">Invalid Email</p> : ""}
                    <input type="email" name="email" value={email} id="email" onChange={onChange}  required />
                    <label htmlFor="subject">SUBJECT</label>
                    {errorstate.subject ? <p className="error">Only alphabets are allowed</p> : ""}
                    <input type="text" name="subject" value={subject} id="subject" onChange={onChange}  required />
                    <label htmlFor="message">MESSAGE</label>
                    <textarea name="message" value={message} id="message" onChange={onChange} cols="" rows="5"  required />
                    <button className='submitButton' type="submit">SUBMIT</button>
                </div>
               
                </form>
            </fieldset>
      </div>
      
    </div>
  )
}

Contact.propTypes = {

}

export default Contact

