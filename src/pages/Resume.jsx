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
                <h3>Fashion Editor</h3>
                <p><strong>Company:</strong> Vogue Magazine</p>
                <p><strong>Duration:</strong> Jan 2020 - Present</p>
                <ul>
                  <li>Directed and managed editorial photo shoots for magazine features.</li>
                  <li>Developed creative concepts for seasonal fashion campaigns.</li>
                  <li>Collaborated with designers, photographers, and models to ensure high-quality content.</li>
                </ul>
              </div>
              <div className="job">
                <h3>Stylist</h3>
                <p><strong>Company:</strong> Freelance</p>
                <p><strong>Duration:</strong> Jan 2018 - Dec 2019</p>
                <ul>
                  <li>Styled clients for events, photo shoots, and personal wardrobe consultations.</li>
                  <li>Provided fashion advice and curated outfits based on client needs.</li>
                  <li>Maintained up-to-date knowledge of fashion trends and industry standards.</li>
                </ul>
              </div>
            </div>
    
            {/* Education */}
            <div className="resume-section">
              <h2>Education</h2>
              <div className="education">
                <h3>Bachelor of Arts in Fashion Design</h3>
                <p><strong>University:</strong> Fashion Institute of Technology</p>
                <p><strong>Graduation Year:</strong> 2017</p>
              </div>
            </div>
    
            {/* Skills */}
            <div className="resume-section">
              <h2>Skills</h2>
              <ul>
                <li>Creative Direction</li>
                <li>Wardrobe Styling</li>
                <li>Trend Analysis</li>
                <li>Photography Collaboration</li>
                <li>Project Management</li>
              </ul>
            </div>
    
            {/* Certifications */}
            <div className="resume-section">
              <h2>Certifications</h2>
              <ul>
                <li>Advanced Fashion Styling Certification - 2018</li>
                <li>Digital Fashion Marketing Course - 2019</li>
              </ul>
            </div>
    
            {/* Hobbies */}
            <div className="resume-section">
              <h2>Hobbies</h2>
              <ul>
                <li>Fashion Blogging</li>
                <li>Photography</li>
                <li>Traveling</li>
                <li>Reading Fashion Magazines</li>
              </ul>
            </div>
          </div>
        </section>
    
    
  );
};

export default Resume;
