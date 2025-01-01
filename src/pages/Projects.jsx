import React from "react";
import ProjectYummy from '../Images/ProjectYummy.png'
const Projects = () => {
  return (
    <section id="projects" className="projects-section  my-5">
            <h2 className="text-center">Projects</h2>
            <p className="text-center">Here are some of the projects I’ve worked on.</p>
          
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
  );
};

export default Projects;
