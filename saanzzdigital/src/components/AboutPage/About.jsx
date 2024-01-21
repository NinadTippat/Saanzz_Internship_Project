import React, { useEffect } from 'react'
import "./About.css"
import whoweare from "../../assets/whoweare.png"
import our_pride from "../../assets/our_pride.png"
import our_mission from "../../assets/mission_2.png"
import Footer from '../Footer/Footer'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Navbar from '../Navbar/Navbar1'
import about from "../../assets/about.png"
import Roll from "react-reveal/Roll"
import LightSpeed from 'react-reveal/LightSpeed';
import vision from "../../assets/vision.png"
import ReactGA from "react-ga"; 
import HR from "../../assets/HR.jpg"
import Ninad from "../../assets/Ninad.jpg"
import Vaishnavi from "../../assets/Vaishnavi.jpg"
import Vibha from "../../assets/Vibha.jpg"
import Gunaja from "../../assets/Gunaja.jpg"
import Nidhi_Mam from "../../assets/Nidhi_Mam.jpg"
import Pratik from "../../assets/Pratik.jpg"



const About = () => {

  useEffect(() => {
    ReactGA.initialize('UA-246090063-2');
  }, []);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [window.location.pathname]);

  return(
    <>
     <div className='about'>
    <Navbar />

    {/* About us  */}
    <div className="about_us">
      <div className="aboutPage_right">
        <LightSpeed right><h1>About Us</h1></LightSpeed>
      </div>
      <div className="aboutPage_left">
        <LightSpeed left> <img src={about} /></LightSpeed>
      </div>
    </div>

     {/* About content  */}
    <div className="about_content">
      <div className="about_content_left">
        <h1>Who are we ?</h1>
        <p>Saanzz Digital was founded in 2020. It started with the idea of Discovery, the Discovery of the next Digital Revolution.</p>
        <br />
         <p>At Saanzz Digital, we are passionate about creating meaningful connections between brands and their target audience.</p>
        <br />
        <p> As a leading Marketing agency, we understand the importance of developing a strong online presence in today's fast-paced digital landscape.</p>
        <br />
        <p>
        We believe that successful marketing starts with a deep understanding of our client's businesses and target audiences.
        </p>
        <br />
        <p>That's why we take the time to get to know our clients, their goals, and their customers before crafting a tailor-made strategy that aligns with their vision.
        </p>
      </div>
      <div className="about_content_right">
        <Zoom left><img src={whoweare} alt="" /></Zoom>
      </div>
    </div>


      {/* Our Mission */}

    <div className="mission">
      
        <div className="mission_box1">
        <Zoom right> <img src={our_mission} alt="" /></Zoom>
        </div>
        <div className="mission_box2">
          <h1>Our Mission</h1>
         <p>Our mission is to help businesses thrive in the digital world through effective and engaging content marketing strategies.</p>
          <br />
         <p>We believe that every brand has a unique story to tell, and our goal is to help our clients communicate their message to their target audience in the most compelling way possible.</p>
          <br />
          <p>Our team of experts is dedicated to staying ahead of the curve when it comes to the latest digital marketing trends and techniques, so we can provide our clients with innovative solutions that deliver real results.</p>
          <br />
          <p>Whether you need help with social media marketing, SEO, content creation, or any other aspect of digital marketing, we are here to help you achieve your goals and take your business to the next level.</p>
          <br />
        </div>
    </div>


      {/* Our Vision */}

    <div className="vision">
        <div className="vision_box1">
          <h1>Our Vision</h1>
          <p>Our vision is to empower businesses of all sizes with the digital tools and strategies they need to succeed in today's ever-changing online landscape.</p>
          <br />
         <p>We believe that every business, no matter how small or large, should have access to the latest digital marketing techniques to help them grow and reach their full potential.</p> 
          <br />
         <p>We will continue to push the boundaries of what's possible in the world of digital and content marketing.</p> 
          <br />
         <p>We aim to be at the forefront of emerging trends and technologies, while always keeping our focus on providing exceptional value to our clients.</p>
          <br />
          <p>As we look to the future, we are excited to continue building our team of talented professionals, who bring a diverse range of skills and expertise to the table.</p>
          <br />
         <p>We are dedicated to fostering a culture of innovation, creativity, and continuous learning, where everyone has the opportunity to grow and thrive.</p>
          <br />
        </div>
        <div className="vision_box2">
           <Zoom left><img src={vision} alt="" /></Zoom> 
        </div>
    </div>

    <h1 className='team_heading'>Meet Our Team</h1>
    <div className="team">
      <div className="team_box">
        <div className="team_img">
          <img src={Nidhi_Mam} alt="" />
        </div>
        <br />
        <br />
        <h1>Nidhi Arora</h1>
        <br />
        <br />
        <h2>Founder</h2>
      </div>

      

     

      <div className="team_box">
        <div className="team_img">
          <img src={Ninad} alt="" />
        </div>
        <br />
        <br />
        <h1>Ninad Tippat</h1>
        <br />
        <br />
        <h2>Developer</h2>
      </div>

      <div className="team_box">
        <div className="team_img">
          <img src={Gunaja} alt="" />
        </div>
        <br />
        <br />
        <h1>Gunaja Ligade</h1>
        <br />
        <br />
        <h2>Content & Creative Head</h2>
      </div>

      

     
    </div>
    <div className="team">
      
    <div className="team_box">
        <div className="team_img">
          <img src={Vaishnavi} alt="" />
        </div>
        <br />
        <br />
        <h1>Vaishnavi Mahamuni</h1>
        <br />
        <br />
        <h2>Tech Lead</h2>
      </div>


      <div className="team_box">
        <div className="team_img">
          <img src={HR} alt="" />
        </div>
        <br />
        <br />
        <h1>Harshita Puli</h1>
        <br />
        <br />
        <h2>HR</h2>
      </div>

    <div className="team_box">
        <div className="team_img">
          <img src={Vibha} alt="" />
        </div>
        <br />
        <br />
        <h1>Vibha Mishra</h1>
        <br />
        <br />
        <h2>Calling Head</h2>
      </div>
     
    </div>
    <div className="team">
      
    <div className="team_box">
        <div className="team_img">
          <img src={Pratik} alt="" />
        </div>
        <br />
        <br />
        <h1>Pratik Satpute</h1>
        <br />
        <br />
        <h2>UI/UX Expert</h2>
      </div>


      
     
    </div>


    <Footer />

  </div>
    </>
  )
}
 


export default About

