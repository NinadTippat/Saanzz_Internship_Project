import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css"
import Navbar from '../Navbar/Navbar1'
import ContactPageMainImg from "../../assets/ContactPageMainImg.png"
import LightSpeed from 'react-reveal/LightSpeed';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import ReactGA from "react-ga"; 


const Contact = () => {

  useEffect(() => {
    ReactGA.initialize('UA-246090063-2');
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]);

  const notify = () => toast("Form Submitted Successfully!");
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    notify();
    emailjs.sendForm('service_en04zem', 'template_5r1tweu', form.current, 'AC92_C5-eGDoaO7iP')
    .then((result) => {
      console.log(result.text);
      document.getElementById("name").value='';
      document.getElementById("email").value='';
      document.getElementById("phone_no").value='';
      document.getElementById("message").value='';
      navigate("/thank_you");
    }, (error) => {
          console.log(error.text);
      });
      
  };
  

  return (
    <div className='contact'>
      <Navbar/>
      <div className="contact_landingPage">
       
        <div className="contact_landingpage_right">
          <h1>Contact Us</h1> 
          <p>We are committed to delivering results that exceed your expectations. Let us assist you in achieving your business objectives and elevating your internet presence. <br /> <br /> Contact us today to learn more about our services and how we can help your brand stand out in the digital world.</p>
        </div>
        
        
        <div className="contact_landingpage_left">
         <LightSpeed left><img src={ContactPageMainImg}/></LightSpeed>
        </div>
      </div> 

      <div className="contact_body">
        <div className="contact_body_left">
        </div>
      
      <form ref={form} onSubmit={sendEmail} className="contact_body_right">
        <label>Name</label>
        <input required placeholder='Enter your name' type="text" name="user_name" id='name' />
        <label>Email</label>
        <input required placeholder='Enter your email' type="email" name="user_email" id='email' />
        <label>Phone</label>
        <input required placeholder='Enter your phone no' type="phone" name="user_phone_no" id='phone_no'/>
        <label>Message</label>
        <textarea required placeholder='Enter your message' className='contact_page' name="user_message" id='message' />
       <button className='submit' type="submit" value="Submit">Submit</button>
      </form>
          
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <Footer/>

    </div>
  )
}

export default Contact