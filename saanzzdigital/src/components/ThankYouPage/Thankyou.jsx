import React, { useEffect } from 'react'
import "./Thankyou.css"
import saanzzlogo from "../../assets/saanzzlogo.jpg"
import { Link } from 'react-router-dom'
import ReactGA from "react-ga"; 


const Thankyou = () => {
  useEffect(() => {
    ReactGA.initialize('UA-246090063-2');
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]);
  return (
    <div className='thankyou'>
        <div className='thank-you'>
            <h1>Thank you for contacting Us</h1>
            <br />
            <br />
            <br />
            <h2>We will get back to you shortly</h2>
           <Link to="/"> <button className='back-to-home'>Back to home</button></Link>
        </div>
        <div className="thankyou2">
            <img src={saanzzlogo} />
        </div>
    </div>
  )
}

export default Thankyou