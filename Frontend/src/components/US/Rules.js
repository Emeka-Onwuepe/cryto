import React from 'react'
import PropTypes from 'prop-types'

function Rules(props) {
    const companyName = "CrytosGlob"
    return (
        <div>
        <h2>RULES AND AGREEMENT</h2>

        <p>Please read the following rules carefully before signing in.</p>
        <p>You agree to be of legal age in your country to partake in this program, and in all the cases your minimal age must be 18 years.</p>
        <p>Saxon Invest Corp is not available to the general public and is opened only to the qualified members of Saxon Invest Corp, the use of 
        this site is restricted to our members and to individuals personally invited by them. Every deposit is 
        considered to be a private transaction between the Saxon Invest Corp and its Member.</p>
        <p>You agree that all information, communications, materials coming from {companyName}
         are unsolicited and must be kept private, confidential and protected from any disclosure. Moreover, the information,
          communications and materials contained herein are not to be regarded as an offer, nor a solicitation for investments 
          in any jurisdiction which deems non-public offers or solicitations unlawful, nor to any person to whom it will be unlawful
           to make such offer or solicitation.</p>
        <p>All the data giving by a member to {companyName} will be only privately used and not disclosed to any third parties.
         {companyName} is not responsible or liable for any loss of data.</p>
         <p>You agree to hold all principals and members harmless of any liability. You are investing at your own risk and you 
         agree that a past performance is not an explicit guarantee for the same future performance. You agree that all information, 
         communications and materials you will find on this site are intended to be regarded as an informational and educational matter and not an investment advice.</p>
         <p>We reserve the right to change the rules, commissions and rates of the program at any time and at our sole discretion without notice, especially in order to respect the integrity and security of the members' interests. 
         You agree that it is your sole responsibility to review the current terms. </p>
         <p>Saxon Invest Corp is not responsible or liable for any damages, losses and costs resulting from any violation of the conditions and terms and/or use of our website by a member. You guarantee to Saxon Invest Corp that you will not use this site in any 
         illegal way and you agree to respect your local, national and international laws.</p>
         <p>We will not tolerate SPAM or any type of UCE in this program. SPAM violators will be immediately and permanently removed from the program.</p>
        <p>{companyName} reserves the right to accept or decline any member for membership without explanation.</p>
        <p>If you do not agree with the above disclaimer, please do not go any further. </p>
        </div>
    )
}

Rules.propTypes = {

}

export default Rules

