import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Home.css"
import "../Contact/Contact.css"
import landing_page_icons from "../../assets/landing_page_icons.png"
import LightSpeed from 'react-reveal/LightSpeed';
import Navbar from '../Navbar/Navbar1';
import Footer from '../Footer/Footer';
import what_we_do from "../../assets/whatwedo.png"
import Zoom from 'react-reveal/Zoom';
import our_pride from "../../assets/our_pride.png"
import logo2 from "../../assets/logo2.png"
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Carousel from '../Carousel/Carousel';
import ReactGA from "react-ga"; 


const Home = () => {

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
          document.getElementById('name').value='';
          document.getElementById('email').value='';
          document.getElementById('phone').value='';
          document.getElementById('message').value='';
          navigate("/thank_you");
      }, (error) => {
          console.log(error.text);
      })
  };
  
  return (
    <div className='home'>
      <Navbar/>

      <div className="homepage"> 
        <div className="homepage_left">
        <LightSpeed left> <h1><span className='saanzz_color'>Saanzz</span><span className='digital_color'>Digital</span></h1></LightSpeed>
       <p className='discovery'>Your brand has a story to tell, and we're here to help you share it with the world through our Digital and Content Marketing services</p>
        </div>
        <div className="homepage_right">
        <LightSpeed leftz> <img className='landing_page_icons' src={landing_page_icons} alt="" /></LightSpeed>
        </div>
      </div>

      <div className="what_we_do_title">
      <h1>What we do?</h1>
      </div>


      <div className="what_we_do">
        <div className="do_left">
          <img src={what_we_do} alt="" />
        </div>
       <div className="do_right">
       
       At Saanzz Digital, we are passionate about helping businesses achieve their Digital Marketing goals.
        <br /> As a full-service Digital and Content Marketing Agency, we offer a range of services to help you reach your target audience and grow your brand online.
        </div>
      </div>
      
      <div className="homepage_connect_with_us_title">
      <h1>Get In Touch</h1>
      </div>

      <div className="contact_body ">
        <div className="contact_body_left homepage_contact_left">
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact_body_right homepage_contact_right">
            <label>Name</label>
            <input required placeholder='Enter your name' type="text" name="user_name" id='name' />
            <label>Email</label>
            <input required placeholder='Enter your email' type="email" name="user_email" id='email' />
            <label>Phone</label>
            <input required placeholder='Enter your phone no' type="phone" name="user_phone_no" id='phone' />
            <label >Message</label>
            <textarea required placeholder='Enter your message' className='contact_page' id='message' name="user_message" />
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
      {/* Our Pride */}

        <div className="our_pride">
          <div className="ou_pride_left">
            <img src={our_pride} alt="" />
          </div>
          <div className="ourpride_content">
          <h1>Our Pride</h1>
         <p>At Saanzz Digital, we take great pride in our track record of fostering growth through our services for digital transformation. We are also proud of the hard work our creative and devoted staff members put out to assist our clients in achieving their marketing goals.
          </p>
          <br />
           <p>Our commitment to providing our clients with digital expertise sets us apart from the competition and drives us to achieve our objectives.
          </p>
          <br />
           <p>Our assets are quality, quick delivery, and creativity.
          </p>
          </div>
        </div>
        <div className="ourpride_bottom">
        <h3>Let's make a difference together.</h3>
          <br />
         <p>We believe that every brand has a story to tell and we are here to help you tell yours. Our team of experts is dedicated to creating Digital and Content Marketing Strategies that inspire, engage, and drive results.

          </p>
        </div>

            {/* Why Saanzz Digital */}
        <div className='why_saanzz_digital'>
            <div className="why_saanzz_digital_left">
            <h1 className='why_saanzz'>Why Saanzz Digital?</h1>
           <p>We don't believe in a one-size-fits-all technique when it comes to digital marketing. Instead, we work closely with our clients to understand their unique needs and create customized strategies that meet their specific goals. 
              <br />
              <br />
              Our focus is always on delivering results that matter to our clients. We track and measure the success of our campaigns, providing regular reports to our clients to ensure that they are getting the best possible return on their investment. We have years of experience in the industry and have helped businesses of all sizes achieve their goals.
            </p>
            </div>
            <div className="why_saanzz_digital_right">
            <Zoom top><img src={logo2} alt="" /></Zoom>
            </div>
        </div>
        
          <div className="feedback">
            <h1 className='feedback_heading'>Feedback from Clients</h1> 
            <p className='trust_company'>Why you should trust our company.</p>
            <Carousel/>
            {/* 
            <div className="feedback_boxes">
            <div className="feedback_box">
               <p>Excellent services delivered. I am very much happy with the work.</p> 
               <p className='client_name'>- Nisha Jayakumar</p>
              </div>
              <div className="feedback_box">
               <p>Wonderful digital service! Timely delivery and quick response by the team.</p> 
               <p className='client_name'>- Inderpreet Kaur</p>
              </div>
              <div className="feedback_box">
                <p>We are associated with Saanzz Digital for last 2 years. They are brilliant with complete Digital Marketing strategy and execution. We are really happy with their Services.</p>
                <p className='client_name'>- Manish Pokale</p>
              </div>
              <div className="feedback_box">
                <p>Really appreciate the skills & competency the team has. They are very responsive and prompt in execution. My content was delivered in a short time span with no compromise on quality.</p>
                <p className='client_name'>- Shelly Soni</p>
              </div>
            </div> */}
          </div>
      <Footer/>

    </div>
  )
}

export default Home