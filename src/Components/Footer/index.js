import React from "react";
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="contact-heading">Contact Us</h4>
      <div className="contact-container">
      <section>
        <h4><FaGithub/>Github</h4>
        <ul>
     
          <li><a href="https://github.com/KonstantinGolovahin">KonstantinGolovahin</a></li>
          
        </ul>
      </section>
      <section>
        <h4><FaEnvelope/>Email</h4>
        <ul>
         
          <li><a href="mailto:sobakoved@inbox.lv">sobakoved@inbox.lv</a></li>
        
        </ul>
      </section>
      <section>
        <h4><FaLinkedin/>LinkedIn</h4>
        <ul>
         
          <li><a href="https://www.linkedin.com/in/konstantin-golovahin-07b977268/">Konstantin Golovahin</a></li>
         
        </ul>
      </section>
      </div>
    </footer>
  );
}

export default Footer;
