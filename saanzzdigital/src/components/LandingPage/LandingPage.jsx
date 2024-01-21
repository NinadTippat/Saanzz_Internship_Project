import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./LandingPage.css"
import landing_page_logo from "../../assets/landing_logo.png"
import landing_facebook from "../../assets/landing_facebook.png"
import landing_linkedin from "../../assets/landing_linkedin.png"
import landing_insta from "../../assets/landing_insta.png"
import landing_hero_section from "../../assets/landing_page_heroSection.png"
import hero_box_1 from "../../assets/hero_box_1.png"
import hero_box_2 from "../../assets/hero_box_2.png"
import hero_box_3 from "../../assets/hero_box_3.png"
import middle from "../../assets/middle.png"
import blog_post from "../../assets/blog_post.png"
import why_choose_us from "../../assets/why_choose_us.png"
import Icon_ from "../../assets/Icon.png"
import Why_choose_us_icon2 from "../../assets/Why_choose_us_icon2.png"
import kaka from "../../assets/kaka.png"
import logo from "../../assets/logo.jpg"
import ReactGA from "react-ga"; 



const LandingPage = () => {

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
    emailjs.sendForm('service_en04zem', 'template_103xyoe', form.current, 'AC92_C5-eGDoaO7iP')
      .then((result) => {
          console.log(result.text);
          document.getElementById('name').value='';
          document.getElementById('email').value='';
          document.getElementById('phone').value='';
          document.getElementById('message').value='';
          document.getElementById('service').value='';
          navigate("/thank_you");
      }, (error) => {
          console.log(error.text);
      })
  };

  return (
      <div className="landingpage"> 

        <nav className='navbar'>
          <div className="logo_section">
           <a href="/"><img className='landing_page_logo' src={landing_page_logo} alt="" /></a>
          </div>
          <div className="social_media">
           <a href="https://www.facebook.com/profile.php?id=100090389767483"> <img src={landing_facebook} alt="" /></a>
           <a href="https://www.linkedin.com/company/saanzzdigital/"> <img src={landing_linkedin} alt="" /></a>
           <a href="https://www.instagram.com/saanzzdigital/"> <img src={landing_insta} alt="" /></a>
          </div>
        </nav>

        <div className="landing_hero_section">
          <div className="hero_section_left">
            <h1>Heading Or Line About Content writing</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
           <a href="/contact"><button>Contact Us</button></a>
          </div>
          <div className="hero_section_right">
            <img src={landing_hero_section} alt="" />
          </div>
        </div>

        <div className="hero_section_box">
          <div className="hero_box">
            <img className='hero_box1_img' src={hero_box_1} alt="" />
            <div className='box_content'>
              <h4>Creative content Writing</h4>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
            </div>
          </div>
          <div className="hero_box">
            <img src={hero_box_2} alt="" />
            <div className='box_content'>
              <h4>Email Newsletter Writing</h4>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
            </div>
          </div>
          <div className="hero_box">
            <img src={hero_box_3} alt="" />
            <div className='box_content'>
              <h4>Technical Writing</h4>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 15</p>
            </div>
          </div>
        </div>

        <div className="middle_section">
          <div className="middle_section_left">
            <img src={middle} alt="" />
          </div>
          <div className="middle_section_right">
            <h3>We are here</h3>
            <h2>Writting Content Like You've Never Had Before</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          </div>
        </div>
        
        <div className="landing_services">
          <h2>What we offer</h2>
          <h1>We're Here To Write For You</h1>
          <div className="service_box_landingPage">
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          </div>

          <div className="service_box_landingPage">
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className='landing_services_boxs'>
            <div className="landing_services_box">
              <img src={blog_post} alt="" />
              <h1>Blog Post</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          </div>

        </div>

        <div className="why_choose_us">
          <div className="why_choose_us_left">
            <h2>Why choose us</h2>
            <h1>Helping Businesses To Succeed Is What We Do.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
            <div className='why_choose_us_middle_section'>
              <div>
                <img src={Icon_} alt="" />
              </div>
              <div>
                <h3>Smart & Creative Solutions</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
              </div>
            </div>
            <div className='why_choose_us_middle_section'>
              <div>
                <img src={Why_choose_us_icon2} alt="" />
              </div>
              <div>
                <h3>Heigh Qaulity Content</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been </p>
              </div>
            </div>
          </div>
          <div className="why_choose_us_right">
            <img src={why_choose_us} alt="" />
          </div>
        </div>

        <div className="landing_page_contact_us">
          <div className='upper_section'></div>
          <div className="contact_form_landing_page">
            <div className="Landingcontact_form">
              <h1>Contact Us</h1>
              <form ref={form} onSubmit={sendEmail} className='landingPageContactForm'>
                <input type="text" name="user_name" id='name' placeholder='Full Name'  />
                <input type="email" name="user_email" id='email' placeholder='Email'  />
                <input type="phone" name="user_phone_no" id='phone' placeholder='Phone Number'  />
                <textarea id='message' name="user_message" cols="30" rows="10" placeholder='Additional information'></textarea>
                <input name='user_service' id='service' type="text" placeholder='Service'  />
                <button type="submit" value="Submit" className='contactButton'>Submit</button>
              </form>
            </div>
          </div>
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

        <div className="testimonials">

          <h4>Testimonial</h4>
          <h1>What They Say About Us</h1>

          <div className="testimonials-cards">
            <div className="test_card">
              <img src={kaka} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <h3>Client Name</h3>
              <h2>Company Name</h2>
            </div>

            <div className="test_card">
              <img src={kaka} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <h3>Client Name</h3>
              <h2>Company Name</h2>
            </div>

            <div className="test_card">
              <img src={kaka} alt="" />
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
              <h3>Client Name</h3>
              <h2>Company Name</h2>
            </div>
          </div>
        </div>

        <div className="helping_you upper_section" >
          <h1>Helping You Talk To The World</h1>
          <button className='landing_contactButton'>Contact Now</button>
        </div>

        <div className="landing_footer">
          <img src={logo} alt="" />

          <div className="footer-social-media">
            <div className="landing-email">
              <p>Hi@saanzzdigital.com</p>
            </div>
            <div className="footer_icon">
             <a href=""> <img src={landing_facebook} alt="" /> </a>
             <a href=""> <img src={landing_linkedin} alt="" /> </a>
             <a href=""> <img src={landing_insta} alt="" /> </a>
            </div>
          </div>
        </div>

      </div>
  )
}

export default LandingPage