import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { storeContext, LOADED, load } from '../../State/State';
import styles from "../../CSS/slides.css"


const Slides = (props) => {
    const { storestate, storedispatch } = useContext(storeContext);
    let images = ['slide_1.jpg', 'slide_2.jpg','slide_3.jpg','slide_4.jpg','slide_5.jpg','slide_6.jpg']
    let url = ""

    const [slideImage, setslideImage] = useState({ url: images[0], count: 0, });
    

    let imageTest = images.slice(0)

    for (const image of imageTest) {
        url = image

    }

useEffect(() => {
    storedispatch(load(LOADED))
}, [])

    useEffect(() => {
       

        if (images.length >= 0) {
            let slideTimer = setInterval(() => {
                setslideImage({ url: images[slideImage.count], count: slideImage.count >= images.length - 1 ? 0 : slideImage.count + 1 })
            }, 3000)
            return () => {
                clearInterval(slideTimer)
            }
        }
    }, [slideImage])


    return (
        <div className="bannerdiv">
  <div className="svgdiv">
        <svg width="100%" stroke="transparent" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
<path  d="M0 0 L40 0 L60 50 L40 100 L0 100 " fill="#FF8D29" />
<text x="8" y="40" fill="#ffffff" className="text1">CrytosGlob.Com</text>
<text x="8" y="50" fill="#333333" className="text2">Investment Hub For CrytoCurrencies </text>
<text x="8" y="60" fill="#222222" className="text3">We Are Here For You</text>
</svg>

    </div>
<div className="banner" >
            <img className="bannerImage" src={`static/css/${slideImage.url}`} alt="" />
            <div style={{ backgroundImage: `url(static/css/${url})`, display: "none" }}></div>
            <div className="bannertext">
            </div>

        </div>
            
        </div>

    );
};


Slides.propTypes = {

};


export default Slides;
