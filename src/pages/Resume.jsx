import React from "react";

const Resume = () => {
   
  return (

        <section className="resume">
          <div className="container">
            <h1 className="title">My Resume</h1>
    
            {/* Contact Information */}
            <div className="resume-section">
              <h2>Contact Information</h2>
              <p><strong>Name:</strong> Pratikshan Pawar</p>
              <p><strong>Email:</strong> pratikshapawar920@gamil.com</p>
              <p><strong>Phone:</strong> 8208152512</p>
              <p><strong>Address:</strong> Kadachiwadi,chakan, Pune, India</p>
            </div>
    
            {/* Professional Summary */}
            <div className="resume-section">
              <h2>Professional Summary</h2>
              <p>
              I am actively seeking a position in the field of Computer Science where I can leverage my technical skills and passion for development to contribute to the growth and success of an organization. I am eager to further my personal and professional development while delivering value through innovative solutions. If you're looking for a motivated and skilled developer to join your team, I would love to connect and discuss how I can contribute to your goals.
              </p>
            </div>
    
            {/* Work Experience */}
            <div className="resume-section">
              <h2>Work Experience</h2>
              <div className="job">
                <h3>Mern stack developer Intern</h3>
                <p><strong>Company:</strong>SpeedUp Infotech</p>
                <p><strong>Duration:</strong> August 2024 - Present</p>
                <ul>
                  <li>A startup company working on a mission to empower 1 million youths. Working with a team to develop end-to-end solutions.</li>
                  <li>Front-end Project lead for an Environmental Platform, created Wireframes, Data Module, Responsive UI.</li>
                  <li>Working With industry experts & Understand how SDLC work and projects development work</li>
                </ul>
              </div>
              {/* <div className="job">
                <h3>Stylist</h3>
                <p><strong>Company:</strong> Freelance</p>
                <p><strong>Duration:</strong> Jan 2018 - Dec 2019</p>
                <ul>
                  <li>Styled clients for events, photo shoots, and personal wardrobe consultations.</li>
                  <li>Provided fashion advice and curated outfits based on client needs.</li>
                  <li>Maintained up-to-date knowledge of fashion trends and industry standards.</li>
                </ul>
              </div> */}
            </div>
    
            {/* Education */}
            <div className="resume-section">
              <h2>Education</h2>
              <div className="education">
                <h3>Bachelor of Science in Computer Science</h3>
                <p><strong>University:</strong> Fashion Institute of Technology</p>
                <p><strong>Graduation Year:</strong> 2024</p>
              </div>
            </div>
    
            {/* Skills */}
            <div className="resume-section">
              <h2>Skills</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </div>
    

            {/* Projects */}
            <div className="resume-section">
              <h2>Projects</h2>
              <ul>
                <li>
                  <strong>Osumare:</strong> A personal resume landing site showcasing professional details and skills with Node.js, MongoDb and React.js.
                  <a href="https://github.com/pratikshapawar0906/Assignment-c1" target="_blank" rel="noopener noreferrer">https://github.com/pratikshapawar0906/Assignment-c1</a>
                </li>
                <li>
                  <strong>Food Menu App:Yummy</strong> React-based application featuring dynamic routing for different meal categories using React Router and AOS animations with MongoDB Database.
                  <a href="https://github.com/pratikshapawar0906/yummypratiksha" target="_blank" rel="noopener noreferrer">https://github.com/pratikshapawar0906/yummypratiksha</a>

                </li>
              </ul>
            </div>
            {/* Certifications */}
            {/* <div className="resume-section">
              <h2>Certifications</h2>
              <ul>
                <li>Advanced Fashion Styling Certification - 2018</li>
                <li>Digital Fashion Marketing Course - 2019</li>
              </ul>
            </div> */}
    
            {/* Hobbies */}
            <div className="resume-section">
              <h2>Hobbies</h2>
              <ul>
                <li>Dancing</li>
                <li>Reading</li>
                <li>Traveling</li>
          
              </ul>
            </div>
          </div>

        </section>
    
    
  );
};

export default Resume;
