import React from "react";
import MyImage from '../Images/Myimages.jpg'
const Home = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="profile-pic">
          <img src={MyImage} alt="Pratiksha Pawar" />
        </div>
        <div className="about-text">
          <h2>Hello,</h2>
          <p>a bit about me:</p>
          <div className="buttons">
            <a href="/resume" className="btn btn-danger">My Resume</a>
            <a href="/projects" className="btn btn-dark">My Work</a>
            <a href="/skills" className="btn btn-warning">My Skills</a>
          </div>
          <p className="bio">
          I am actively seeking a position in the field of Computer Science where I can leverage my technical skills and passion for development to contribute to the growth and success of an organization. I am eager to further my personal and professional development while delivering value through innovative solutions. If you're looking for a motivated and skilled developer to join your team, I would love to connect and discuss how I can contribute to your goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
