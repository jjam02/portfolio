import { Link } from "react-router-dom";
import "../css/index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Navbar = () => {
  return (<span>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fluid fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand ml-3" to="/">Jonathan Alvarez </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent" style={{ flexGrow: 0 }}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-left" >
            <li className="nav-item">
              <Link className="nav-link" to="/">Home </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </span >);
};

export default Navbar;
