import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App2.css";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <header className="header">
          <div className="container">
            <h1>Pratiksha Pawar</h1>
            <p>Mern Stack Developer | Frontend Developer</p>
            <nav>
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/resume">Resume</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">My Skills</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
        <div className="container">
          <div className="contact-info">
            <p>Call: <a href="tel:8208152512">8208152512</a></p>
            <p>Contact: <a href="mailto:pratikshapawar920@gmail.com">pratikshapawar920@gmail.com</a></p>
          </div>
          <div className="socials">
            {/* <a href="#">+</a>
            <a href="#">f</a>
            <a href="#">t</a>
            <a href="#">g</a> */}
          </div>
          <p className="footer-text">© 2025 by Pratiksha Pawar. </p>
        </div>
      </footer>
      </div>
    </Router>
  );
};

export default App;
