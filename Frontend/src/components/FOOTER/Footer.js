import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import "../../CSS/footer.css"



const Footer = (props) => {
    let publishedDate = props.date
    let date = new Date;
    let year = date.getFullYear();
    let footerDate = year
    if (year != publishedDate) {
        footerDate = `${publishedDate} - ${year}`;

    }
    return (
        <div className="footerDiv">
            <footer>
                <p style={{color:"white"}} id="footer"> Copyright &copy; <span id="footerdate" style={{ padding: "0%",color:"white" }}>{footerDate}</span>.
             All rights reserved. AYPM.com <br /> Designed by CasTech. </p>
            </footer>
        </div>
    );
};


Footer.propTypes = {

};


export default Footer;
