import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import "../../CSS/faq.css"

function Faq(props) {
    const companyName="Crytosglob"
    const init={visibility:"hidden",opacity:"0",display:"none"}
    const initial = {first:init,second:init,third:init,fourth:init,fifth:init,sixth:init,seventh:init,eighth:init,nineth:init}
    const [display, setdisplay] = useState(initial)

    const OnClick=(id)=>{
        setdisplay({...display,[id]:display[id].visibility=="hidden"?{visibility:"visible",opacity:"1",display:"block"}:{visibility:"hidden",opacity:"0",display:"none"}})
    }

    useEffect(() => {
      
    }, [display])

    return (
        <div className="faq">
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="question" onClick={()=>OnClick("first")}>
                <p>How can I invest with {companyName} ?</p>
                <p style={{visibility:display.first.visibility,opacity:display.first.opacity,display:display.first.display}} className="answer">To make a investment you must first become a member of {companyName} . Once you are signed up, you can make your first deposit.
                 All deposits must be made through the Members Area. You can login using the member username and password you receive when signup.</p>
            </div>
            <div className="question" onClick={()=>OnClick("second")}>
                <p>How do I open my {companyName} Account?</p>
                <p style={{visibility:display.second.visibility,opacity:display.second.opacity,display:display.second.display}} className="answer">It's quite easy and convenient. Just sign up.</p>
            </div>
            <div className="question" onClick={()=>OnClick("third")}>
                <p>Which e-currencies do you accept?</p>
                <p style={{visibility:display.third.visibility,opacity:display.third.opacity,display:display.third.display}} className="answer">
                We accept PerfectMoney, Payeer & Bitcoin.</p>
            </div>
            <div className="question" onClick={()=>OnClick("fourth")}>
                <p>How can I withdraw funds?</p>
                <p style={{visibility:display.fourth.visibility,opacity:display.fourth.opacity,display:display.fourth.display}} className="answer">
                Login to your account using your username and password and check the Withdraw section.</p>
            </div>
            <div className="question" onClick={()=>OnClick("fifth")}>
                <p>How long does it take for my deposit to be added to my account?</p>
                <p style={{visibility:display.fifth.visibility,opacity:display.fifth.opacity,display:display.fifth.display}} className="answer">
                Your account will be updated as fast, as you deposit.</p>
            </div>
            <div className="question" onClick={()=>OnClick("sixth")}>
                <p>What if I can't log into my account because I forgot my password?</p>
                <p style={{visibility:display.sixth.visibility,opacity:display.sixth.opacity,display:display.sixth.display}} className="answer">
                Just click on the forget password and you will recieve further instructions</p>
            </div>
            <div className="question" onClick={()=>OnClick("seventh")}>
                <p>Does a daily profit paid directly to my currency account?</p>
                <p style={{visibility:display.seventh.visibility,opacity:display.seventh.opacity,display:display.seventh.display}} className="answer">
                No, profits are gathered on your Saxon Invest Corp account and you can withdraw them anytime.</p>
            </div>
            <div className="question" onClick={()=>OnClick("eighth")}>
                <p>Can I do a direct deposit from my account balance?</p>
                <p style={{visibility:display.eighth.visibility,opacity:display.eighth.opacity,display:display.eighth.display}} className="answer">
                Yes! To make a deposit from your {companyName} 
                account balance. Simply login into your members account and click on Make Deposit ans select the Deposit from Account Balance.</p>
            </div>
            <div className="question" onClick={()=>OnClick("nineth")}>
                <p>After I make a withdrawal request, when will the funds be available?</p>
                <p style={{visibility:display.nineth.visibility,opacity:display.nineth.opacity,display:display.nineth.display}} className="answer">
                After withdrawal request has been made, the funds will be credited by our Accounts on the same day, latest within 72 hours from Monday 
                to Friday 9AM - 6PM (GMT) Usually we process Funds everyday and much faster than you expect.</p>
            </div>
        </div>
    )
}

Faq.propTypes = {

}

export default Faq

