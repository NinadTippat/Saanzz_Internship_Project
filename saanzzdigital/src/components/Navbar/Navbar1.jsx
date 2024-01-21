import React from 'react'
import "./Navbar1.css"
import logo from "../../assets/logo.jpg"
import { useState } from 'react'
import menus from "../../assets/menus.png"
import close from "../../assets/close.png"
import phone from "../../assets/phone.png"
import whatsapp from "../../assets/whatsapp.png"

const Navbar1 = () => {
    
    const [state, setState] = useState(false)

  return (
    <nav className='navbar_'>
        <a href="/"><img className='logo' src={logo} alt="" /></a>
        <div>
            <ul id='navbar' className={state ? "#navbar active" : "#navbar"}>
                <li>
                    <a className='icons' href="/">Home</a>
                </li>
                <li>
                    <a className='icons' href="/about">About</a>
                </li>
                <li>
                    <a className='icons' href="/services">Service</a>
                </li>
                <li>
                    <a className='icons' href="/contact">Contact</a>
                </li>
                <li className='whatsapp_phone'>
                    <a href="https://api.whatsapp.com/send?phone=9372277571" className='mobile_icons'><img className='whatsapp' src={whatsapp} alt="" /></a> 
                    <a className='mobile_icons' href="tel:+9372277571"><img className='phone' src={phone}/><p>+91 93722 77571</p></a>
                </li>
                {/* +91 9372277571 */}
                {/* <li>
                    <a className='mobile_icons' href="tel:+9372277571">+9372277571</a>
                </li> */}
            </ul>
        </div>
        <div id='mobile' onClick={()=>{setState(!state)}}>
            {/* <i id='bar' className={state ? "fas fa-times" : "fas fa-bars"} onClick={()=>{setState(!state)}}></i> */}
            {state ? <img className='menu' src={close} alt="" /> : <img src={menus} alt="" />}
        </div>
    </nav>
  )
}

export default Navbar1