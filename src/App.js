import React from 'react';
import './App.css'; // Ensure this CSS file is updated
import MyImage from './Images/Myimages.jpg';
import  ProjectYummy from './Images/ProjectYummy.png'


const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <h1 className="name">Pratiksha Pawar</h1>
          <p className="tagline">Frontend developer | Mern Stack Developer</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Me Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <img 
            src={MyImage} 
            alt="About Me" 
            className="about-image"
          />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
            I am actively seeking a position in the field of Computer Science where I can leverage my technical skills and passion for development to contribute to the growth and success of an organization. I am eager to further my personal and professional development while delivering value through innovative solutions. If you're looking for a motivated and skilled developer to join your team, I would love to connect and discuss how I can contribute to your goals.
            </p>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <p>Here are some of the projects I’ve worked on. Click on the titles to learn more.</p>
      
        <div className="projects-grid">
          <div className="project-card">
            <img 
              src={ProjectYummy} 
              alt="Project 1" 
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">Yummy Project</h3>
              <p className="project-description">
              A dynamic and interactive web application built using React.js, designed to display a food menu with categorized sections for starters, breakfast, lunch, and dinner. The app leverages React Router for seamless navigation between different menu categories and AOS (Animate on Scroll) for smooth scrolling animations, enhancing the user experience. Users can easily explore the various food options with clear visual hierarchy and organized layout. This project highlights my proficiency in front-end development, React.js, and UI/UX design.
              </p>
              <a href="https://github.com/pratikshapawar0906/yummypratiksha" className="project-link">View on GitHub</a>
              <a href='https://pratikshayummy.netlify.app/' target='_blank' rel="noreferrer"  className='Project-deploy'>Project link</a>
            </div>
          </div>
      
          <div className="project-card">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Project 2" 
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">Osumre Project</h3>
              <p className="project-description">
                
              </p>
              <a href="https://github.com/pratikshapawar0906/Assignment-c1" className="project-link">View on GitHub</a>
            </div>
          </div>
      
          {/* <div className="project-card">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Project 3" 
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">Project 3</h3>
              <p className="project-description">
                A weather forecasting app built with JavaScript and APIs that provides real-time weather data based on user location.
              </p>
              <a href="https://github.com/your-username/project3" className="project-link">View on GitHub</a>
              https://myportfoliopratiksha.netlify.app/
            </div>
          </div> */}
        </div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <p>Here are some of the key skills I have acquired and developed over the years:</p>
      
        <div className="skills-grid">
      
          {/* Web Development Skills */}
          <div className="skill-category">
            <h3 className="category-title">Web Development</h3>
            <ul className="skills-list">
              <li><i className="fab fa-js-square"></i> JavaScript</li>
              <li><i className="fab fa-react"></i> React.js</li>
              <li><i className="fab fa-node"></i> Node.js</li>
              <li><i className="fas fa-code"></i> HTML5</li>
              <li><i className="fab fa-css3-alt"></i> CSS3</li>
              <li><i className="fas fa-database"></i> MongoDB</li>
            </ul>
          </div>
      
          {/* Tools & Technologies */}
          <div className="skill-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <ul className="skills-list">
              <li><i className="fab fa-git"></i> Git</li>
              <li><i className="fab fa-vscode"></i> VS Code</li>
              <li><i className="fas fa-cogs"></i> Postman</li>
            </ul>
          </div>
      
          {/* Soft Skills */}
          <div className="skill-category">
            <h3 className="category-title">Soft Skills</h3>
            <ul className="skills-list">
              <li><i className="fas fa-lightbulb"></i> Problem-solving</li>
              <li><i className="fas fa-comments"></i> Communication</li>
              <li><i className="fas fa-users"></i> Teamwork</li>
              <li><i className="fas fa-clock"></i> Time Management</li>
            </ul>
          </div>
      
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact</h2>
        <p>If you would like to get in touch, feel free to reach out through the form below or connect with me via my social media profiles!</p>
      
        {/* Alternative Contact Methods */}
        <div className="contact-info">
          <ul>
            <li>
              <a href="mailto:pratikshapawar920@gmail.com">
                <i className="fa fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pratiksha-pawar-a77262263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/pratikshapawar0906">
                <i className="fab fa-git"></i> GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default Portfolio;
