import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/AboutPage/About';
import Contact from './components/Contact/Contact';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomePage/Home';
// import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog'
import Thankyou from './components/ThankYouPage/Thankyou';

import Analytics from './components/Analytics';
import LandingPage from './components/LandingPage/LandingPage';


function App() {
  return (
   <BrowserRouter>
   <Analytics/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>   
        <Route path='/blog' element={<Blog/>}/>   
        <Route path='/thank_you' element={<Thankyou/>}/>   
        <Route path='*' element={<ErrorPage/>}/>
        <Route path='/landing-page' element={<LandingPage/>}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
