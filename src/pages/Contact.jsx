import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to reach out through the form below or connect with me via my social media profiles!</p>
        <ul  >
            <li>
              <a href="mailto:pratikshapawar920@gmail.com">
                <i className="fa fa-envelope"></i> Email
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pratiksha-pawar-a77262263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"  rel="noreferrer">
                <i className="fa fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/pratikshapawar0906" target="_blank"  rel="noreferrer">
                <i className="fab fa-git"></i> GitHub
              </a>
            </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
