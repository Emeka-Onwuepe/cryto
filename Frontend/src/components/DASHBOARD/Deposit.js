import React,{useState,useEffect,useContext} from 'react'
import PropTypes from 'prop-types'
import PackageCopy from '../PACKAGES/packageCopy'
import { storeContext,DashBoard,DEPOSIT} from '../../State/State';
import "../../CSS/form.css"

function Deposit(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const [formState, setformState] = useState({amount:"",packages:""})
    const {amount,packages} = formState
    const onChange=(e)=>{
        setformState({ ...formState, [e.target.name]: e.target.value })
    }

    const onSubmit =(e)=>{
        e.preventDefault()
        const config = { headers: { "Content-Type": "application/json", "Authorization": `Token ${storestate.User.token}` } }
        const data ={"action":"DEPOSIT","amount":amount,"packages":packages}
        DashBoard(data,config,DEPOSIT).then(res=>storedispatch(res))
    }

    useEffect(() => {
    }, [formState]);

    
    return (
        <div>
            <div className="packagesList">
            <h3>Available packages</h3>
            <PackageCopy/>
            <div className="formDiv">
            <fieldset>
                <form action="" method="post" onSubmit={onSubmit}>
                <div className="form">
                <label htmlFor="section">Section Package</label>
                        <select onChange={onChange} name="packages">
                            <option value="null">Select package</option>
                            <option value="BASIC">BASIC</option>
                            <option value="CORPORATE">CORPORATE</option>
                            <option value="EXECUTIVE">EXECUTIVE</option>
                            <option value="DIAMOND">DIAMOND</option>
                        </select>
                <label htmlFor="first_name">AMOUNT ($) </label>
                    <input type="number" step="0.50" min="1" value={amount} id="amount" name="amount" onChange={onChange} required/>
                    <button className='submitButton' type="submit">SUBMIT</button>
                </div>
                    
                </form>
            </fieldset>

            </div>
        </div>
        </div>
    )
}

Deposit.propTypes = {

}

export default Deposit

