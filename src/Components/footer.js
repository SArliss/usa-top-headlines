import React from 'react';
import github from '../Images/github.svg';
import linkedin from '../Images/linkedin.svg';
import website from '../Images/website.svg';

function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/sinaraarliss/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkedin" />
      </a>
      <a href="https://github.com/SArliss/usa-top-headlines" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github" />
      </a>
      <a href="https://www.sinaraarliss.com" target="_blank" rel="noopener noreferrer">
        <img src={website} alt="github" />
      </a>
      <p>Copyright © <a href="mailto: sinaraarliss@gmail.com" target="_blank" rel="noopener noreferrer">Sinara Arliss</a> 2020</p>
    </footer>
  )
}

export default Footer;