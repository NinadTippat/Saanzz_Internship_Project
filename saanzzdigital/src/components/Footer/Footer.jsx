import React from 'react'
import "./Footer.css"
// import logo2 from "../../assets/logo2.png"
import logo from "../../assets/logo1.png"
import Bounce from 'react-reveal/Bounce';
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import email from "../../assets/email.png"
import whatsapp from "../../assets/whatsapp.png"
import phone from "../../assets/phone.png"

const Footer = () => {

  return (
  <footer className='container'>
    <div className="container2">
    <Bounce right><img className='logo' src={logo} alt="" /></Bounce>
    </div>
     <div class="container1 coloumn">
      <p>&copy; 2023 Saanzz Digital. All Rights Reserved.</p>
      <p>Address: 601, 6th Floor, Rupa Solitaire Millennium Business Park, Plot No. A-1, Mahape, Navi Mumbai- 400710</p>
    </div>
    <div className="container3">
      <a className='email_container' href="mailto:hi@saanzzdigital.com"><img className='instagram email' src={email}/><p>Hi@saanzzdigital.com</p></a><br />
      <div className='sub_container'>
      <a href="https://api.whatsapp.com/send?phone=9372277571"> <img className=' email' src={whatsapp} alt="" /> </a><a className='telephone' href="tel:+9372277571"><img className='email phone' src={phone}/><p>+91 93722 77571</p></a>
      </div>
    </div>
    <div className="container1">
       
        <a href="https://www.facebook.com/profile.php?id=100090389767483"> <img className='instagram' src={facebook}></img></a>
        <br />
        <a href="https://www.instagram.com/saanzzdigital/"><img className='instagram' src={instagram}/></a>
        <br />
        <a href="https://www.linkedin.com/company/saanzzdigital/"><img className=' linkedin' src={linkedin}/></a>
    </div>
</footer>

  )
}

export default Footer