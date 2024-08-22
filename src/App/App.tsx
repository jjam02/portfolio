import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/index.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './tsx/Navbar'
import Home from './tsx/Home';
import Projects from './tsx/Projects';
import About from './tsx/About';
import Footer from './tsx/Footer';
import ScrollToTop from './tsx/ScrollToTop';
import Resume from './tsx/Resume2';


const App = () => {


  return (
    <div className='app-container'>
      <Router basename="/portfolio">
        <ScrollToTop />
        <Navbar />
        <div className='blank-space-top'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <div className="blank-space"></div>
        <Footer />

      </Router>
    </div>
  );
};

export default App;
