import React from 'react';
import github from '../Images/github';
import linkedin from '../Images/linkedin';
import website from '../Images/website';

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>kkk Copyright © <a href="mailto: sinaraarliss@gmail.com" target="_blank" rel="noopener noreferrer">Sinara Arliss</a> 2020</footer>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/sinaraarliss/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/SArliss" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.sinaraarliss.com" target="_blank" rel="noopener noreferrer">
          <img src={website} alt="portfolio website" />
        </a>
      </div>
    </div>
  )
}

export default Footer;