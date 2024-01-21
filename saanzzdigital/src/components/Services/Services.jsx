import React, { useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Services.css" 
import Navbar from '../Navbar/Navbar1';
import ServicesPageMainImg from "../../assets/ServicesPageMainImg.png"
import ServicePageimg1 from "../../assets/servicepage1.png"
import ServicePageimg2 from "../../assets/servicepage2.png"
import Cart1 from "../../assets/cart1.png"
import Cart2 from "../../assets/cart2.png"
import Cart3 from "../../assets/cart3.png"
import Cart4 from "../../assets/cart4.png"
import feature1 from "../../assets/feature1.png"
import feature2 from "../../assets/feature2.png"
import feature3 from "../../assets/feature3.png"
import feature4 from "../../assets/feature4.png"
import feature5 from "../../assets/feature5.png"
import feature6 from "../../assets/feature6.png"
import feature7 from "../../assets/feature7.png"
import feature8 from "../../assets/feature8.png"
import Footer from '../Footer/Footer';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import { Flip } from 'react-reveal';
import { Bounce } from 'react-reveal';
import { Zoom } from 'react-reveal';
import ReactGA from "react-ga"; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Services = () => {
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
    <div className='services'>
      <Navbar/>

      {/* Service Landing Page  */}
      <div className="services_landingPage">
        <div className="landingPage_right">
        <LightSpeed right><h1>Our Services</h1></LightSpeed>
        </div>
        <div className="landingPage_left">
         <LightSpeed left><img src={ServicesPageMainImg}/></LightSpeed>
        </div>
      </div>  


      {/* Service page contact form  */}
      <div className='service-contact-form'>
            <h1>Contact Us</h1>
              <form ref={form} onSubmit={sendEmail} className="service-contact">
                <label>Name</label>
                <input required placeholder='Enter your name' type="text" name="user_name" id='name' />
                <label>Email</label>
                <input required placeholder='Enter your email' type="email" name="user_email" id='email' />
                <label>Phone</label>
                <input required placeholder='Enter your phone no' type="phone" name="user_phone_no" id='phone_no'/>
                <label>Message</label>
                <textarea required placeholder='Enter your message' className='' name="user_message" id='message' />
            <button className='service-submit' type="submit" value="Submit">Submit</button>
            </form>
        </div>



      {/* Service Body  */}
      <div className="service_body">
        <div className="service_body_left">
            <img src={ServicePageimg1} alt="" />
        </div>
        <div className="service_body_right">
        <h2>A Digital Adventure Where We All Work Together & Win:</h2>       
          <br />
         <p>Our team of experienced marketers and content creators specializes in developing tailored digital marketing strategies that drive traffic, increase engagement, and ultimately generate leads and conversions for your business. We leverage the latest technologies, tools, and best practices to ensure that our clients stay ahead of the competition and achieve their desired outcomes.</p>
        </div>
      </div>

            {/* Service body  */}
            <div className="service_body">
        <div className="service_body_right">
        <p>We pride ourselves on our transparency, flexibility, and customer-centric approach. We provide regular progress reports, constant communication, and a commitment to delivering exceptional results. We can assist you whether you want to raise brand awareness, enhance website traffic, or increase sales. Our future mission is to help our clients succeed in the digital world, by providing cutting-edge solutions, unparalleled service, and a commitment to excellence in everything we do.</p>
        </div>
        <div className=" service_body_left">
          <img src={ServicePageimg2} alt="" />
        </div>
      </div>

      <div className="service_mid">
       <h1>Let Saanzz Digital Professionals Craft Optimum Language to Generate Leads for Your Company</h1>
      </div>


      {/* Service Cart  */}

      <Zoom bottom><div className="services_cart">
        <div className="cart_left">
          <img src={Cart1} alt="" />
          <h1 className='right_heading'>End-To-End Marketing Strategy</h1>
          <p>An end-to-end marketing strategy involves developing and implementing a comprehensive marketing plan that covers all aspects of the customer journey, from brand awareness to customer retention.</p>
        </div>


        <div className="cart_right">
        <img src={Cart2} alt="" />
          <h1 className='right_heading'>Performance Marketing</h1>
          <p>Performance marketing is a type of online advertising where advertisers pay publishers when a specific action is completed, such as a click, form submission, or sale. It's a measurable way to drive conversions and increase revenue.</p>
        </div>
      </div></Zoom>

      <Zoom bottom><div className="services_cart">


        <div className="cart_left">
          <img src={Cart3} alt="" />
          <h1 className='right_heading'>SEO & SMO</h1>
          <p>Search Engine Optimization (SEO) and Social Media Optimization (SMO) are tactics used to increase organic traffic to your website. SEO involves optimizing your website and content to rank higher in search engine results pages. SMO involves optimizing your social media profiles and content to increase engagement and traffic.</p>
        </div>


        <div className="cart_right">
        <img src={Cart4} alt="" />
          <h1 className='right_heading'>Content Marketing</h1>
          <p>Content marketing involves creating and sharing valuable content to attract and retain a defined audience. It includes blog posts, videos, infographics, and social media posts, among others. The goal is to educate, entertain, or inform your audience, which can help establish your brand as a thought leader in your industry.</p>
        </div>
      </div></Zoom> 

      {/* Features */}
      <div className="our_features">
        <Bounce bottom><h1>Our Other Features</h1></Bounce>
      </div>

      <div className="features">
        <Zoom bottom>
        <div className="features_box">
          <img src={feature1} alt="" />
          <h1>Campaign Strategy</h1>
          <p>A campaign strategy involves the development of a plan to achieve a specific marketing objective. It includes the selection of marketing channels, target audience, messaging, and budget allocation.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature2} alt="" />
          <h1>Blog writing</h1>
          <p>Blog writing is a form of content marketing that involves creating articles to attract and engage your target audience. Blogs can help establish your brand as an authority in your industry, drive traffic to your website, and generate leads.</p>
        </div></Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature3} alt="" />
          <h1>Product Descriptions</h1>
          <p>Product descriptions are written content that describes your products or services. They should be engaging, informative, and optimized for search engines to drive traffic to your website</p>
        </div>
        </Zoom>
      </div>

      <div className="features">
        <Zoom bottom>
        <div className="features_box first_box">
          <img src={feature4} alt="" />
          <h1>Email marketing</h1>
          <p>Email marketing involves sending promotional messages to a group of subscribers who have opted in to receive them. It's a cost-effective way to stay in touch with your audience, promote your products or services, and build customer loyalty.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature5} alt="" />
          <h1>YouTube Scripts</h1>
          <p>We provide viewers with an engaging and well-written video script that will entice them to share the masterpiece with others.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box">
          <img src={feature6} alt="" />
          <h1>ChatBots</h1>
          <p>AI-powered chatbots can provide 24/7 customer support and improve customer engagement on websites and social media platforms. They can answer common customer questions, resolve issues, and provide product recommendations.</p>
        </div>
        </Zoom>
      </div>

      <div className="features thirdbox first_box">
        <Zoom bottom>
        <div className="features_box">
          <img src={feature7} alt="" />
          <h1>Search Engine Marketing</h1>
          <p>AI-powered tools can help your venture optimize search engine marketing campaigns by analyzing customer behavior and search queries, identifying keywords and phrases that perform best, and providing data-driven insights for ad optimization.</p>
        </div>
        </Zoom>
        <Zoom bottom>
        <div className="features_box last_box">
          <img src={feature8} alt="" />
          <h1 >Programmatic Advertising</h1>
          <p>AI-powered programmatic advertising can help digital marketing agencies automate ad buying and optimization by analyzing customer data, identifying trends, and making real-time data-driven decisions.</p>
        </div>
        </Zoom>
      </div>
      
      <div className="our_features">
       <Bounce top><h1>Why trust us ?</h1></Bounce> 
      </div>

      {/* Why Trust Us */}
      <div className="why_trust_us">
        <div className='why_trust_us_left'>
        We take the time to understand your business, your target audience, and your unique challenges to developing a comprehensive strategy that will help you achieve your objectives.  
          <br />
        Whether you are looking to increase your online presence, generate more leads, or improve your brand awareness, Saanzz Digital can help.
        </div>
        <div className='why_trust_us_right'>
         
          <li> With our clients, we want to establish lasting partnerships built on transparency, success, and trust. When you work with us, you can expect a personalized approach that is tailored to your specific needs and goals. </li>
          <br />
          
          <li>Our team has the skills, experience, and creativity to develop and execute a results-driven digital marketing campaign that will exceed your expectations.</li>
          <br />
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
      <Footer/>
    </div>

  )
}

export default Services