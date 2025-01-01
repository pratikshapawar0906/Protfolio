import React from "react";

const Skills = () => {
  return (
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
  );
};

export default Skills;
