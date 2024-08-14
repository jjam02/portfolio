import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './tsx/Navbar'
import Home from './tsx/Home';
import Projects from './tsx/Projects';
import About from './tsx/About';
import Footer from './tsx/Footer';
import ScrollToTop from './tsx/ScrollToTop';
import Resume from './tsx/Resume'


const App = () => {


  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Resume />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
