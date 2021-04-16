import React,{useContext,useEffect} from 'react'
import PropTypes from 'prop-types'
import "../../CSS/pendingpayment.css"
import { storeContext } from '../../State/State';
import "../../CSS/table.css"

function PendingDeposit(props) {
    const { storestate, storedispatch } = useContext(storeContext);
    const { withdraws, deposits,pendingdeposits } = storestate
    let tableData=''
    if(pendingdeposits.length>0){
        tableData=pendingdeposits.map(item=><tr key={item.id}><td>{item.packages}</td><td>{item.amount}</td><td>{item.date}</td><td>{item.pending?"True":"False"}</td>
            <td>{item.status}</td><td>{item.success?"True":"False"}</td><td><a target="_blank" href={item.url}><button>Pay</button></a></td></tr>)
    }

    useEffect(() => {
      
    }, [pendingdeposits]);

    return (
        <div className="ppayment">
        {pendingdeposits.length>0?
            <table>
            <thead>
            <tr>
            <th>Package</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Pending</th>
            <th>Status</th>
            <th>Successful</th>
            <th>Complete Transaction</th>
            </tr>
            </thead>
            <tbody>
            {tableData}
            </tbody>
            </table>
        :<p>You don't have any pending dopsit(s)</p>}
            
        </div>
    )
}

PendingDeposit.propTypes = {

}

export default PendingDeposit

