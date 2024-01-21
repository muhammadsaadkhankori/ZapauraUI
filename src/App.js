import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navbar  from './Navbar';
import HeroSection from './HeroSection';
import Gallery from './ImageGallery'
import Footer from './Footer';

function App() {
  
  return (
     <div className="App">
     <Navbar />
     <HeroSection />
     <Gallery/>
     <Footer/>
     </div>
   );
 } 
 
 export default App;