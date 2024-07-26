import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Footer from './Footer';


const App = () => {


  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Resume />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
