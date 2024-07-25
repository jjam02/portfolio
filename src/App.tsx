import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Navbar'
import Home from './Home';
import Projects from './Projects';


const App = () => {
 

  return (
    <Router>
      
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<Resume />} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
      
    </Router>
  );
};

export default App;
