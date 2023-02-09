import React, {lazy, Suspense} from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SideNavbar from './components/sideNavbar/sideNavbar';
import Footer from "./components/footer/footer"
// import Home from "./pages/home/home"
// import About from './pages/about/about';
// import Contact from './pages/contact/contact';
// import Portfolio from "./pages/portfolio/portfolio"
import Navbar from "./components/navbar/navbar" 


const Home = lazy(() => import("./pages/home/home"));
const About= lazy(() => import("./pages/about/about"));
const Contact = lazy(() => import("./pages/contact/contact"))
const Portfolio = lazy(() => import("./pages/portfolio/portfolio"))




const App:React.FC=()=> {
  return (
    <div className="App">
    <div className="App-inner">
    
      <SideNavbar/>
     <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      </Suspense>
    </div>
    <Footer />
    </div>

    


  
    
  );
}

export default App;
