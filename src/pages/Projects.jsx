import React from "react";
import ProjectYummy from '../Images/ProjectYummy.png'
import ProjectPhotoApp from '../Images/ProjectPhotoApp.png'
import ProjectOsumare from '../Images/ProjectOsumare.png'
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
                  src={ProjectOsumare} 
                  alt="Project 2" 
                  className="project-image"
                />
                <div className="project-info">
                  <h3 className="project-title">Osumre Project</h3>
                  <p className="project-description">
                  Created a professional landing page to showcase  work and services.The frontend, developed using HTML, CSS, Bootstrap, React.js, and JavaScript, ensures a visually appealing, responsive design. This project demonstrates my skills in full-stack development, with a strong focus on UI/UX design and backend functionalit
                  </p>
                  <a href="https://github.com/pratikshapawar0906/Assignment-c1" className="project-link">View on GitHub</a>
                </div>
              </div>
          
              <div className="project-card">
                <img 
                  src={ProjectPhotoApp} 
                  alt="Project 3" 
                  className="project-image"
                />
                <div className="project-info">
                  <h3 className="project-title">Project 3</h3>
                  <p className="project-description">
                  Developed a dynamic web application to showcase a photographer's portfolio, demonstrating their skills and photos. The backend was built using MongoDB, Node.js, and Express.js, ensuring secure storage and management of photo data. The frontend was designed with HTML, CSS, Bootstrap, and React.js, providing a responsive and user-friendly interface. This project highlights full-stack development capabilities with a focus on seamless UI/UX and efficient backend performance.
                  </p>
                  <a href="https://github.com/pratikshapawar0906/PhotoApp" className="project-link">View on GitHub</a>
                </div>
              </div>
            </div>
          </section>
  );
};
 //https://myportfoliopratiksha.netlify.app/
export default Projects;
