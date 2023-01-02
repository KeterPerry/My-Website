import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar"
import SideNavbar from './components/sideNavbar/sideNavbar';
import Footer from "./components/footer/footer"
import Home from "./pages/home/home"
import About from './pages/about/about';
import Contact from './pages/contact/contact';




const App:React.FC=()=> {
  return (
    <div className="App">
    <div className="App-inner">
      {/* <Navbar /> */}
      <SideNavbar/>
      {/* <Hamburger/> */}
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
    </div>

    


  
    
  );
}

export default App;
