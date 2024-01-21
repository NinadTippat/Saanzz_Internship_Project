import React, { useState } from "react";
import "./Navbar.css";

import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png" 
import { Link, NavLink } from "react-router-dom";
import whatsapp from "../../assets/whatsapp.png"
import phone from "../../assets/phone.png"

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
         <Link to="/"><img className="logoimg" src={logo} alt="" /></Link>
        </div>
        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li >
              <NavLink className="nav_icons" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav_icons" to="/about">about</NavLink>
            </li>
            <li>
              <NavLink className="nav_icons" to="/services">services</NavLink>
            </li>
            {/* <li>
              <NavLink to="/blog">Blog</NavLink>
            </li> */}
            <li>
              <NavLink className="nav_icons" to="/contact">contact</NavLink>
            </li>
            <li>
              <NavLink to="https://wa.me/+91 9372277571"><img className="homepage_whatsapp" src={whatsapp} alt="" /></NavLink>
            </li>
            <li className="homepage_phone">
              <NavLink to="tel:+9372277571"><img className="homepage_whatsapp" src={phone} alt="" /><p>+91 93722 77571</p></NavLink>
            </li>
            
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;