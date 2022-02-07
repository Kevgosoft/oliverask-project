import React from 'react';
import gpt3Logo from '../../assets/ComputerTech.jpg';
import lightBulb from '../../assets/LightBulb.PNG'
import './footer.scss';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">INTO THE FUTURE</h1>
      <img src={gpt3Logo} alt="gpt3Logo" />
    </div>

    <div className="gpt3__footer-btn">
      <p>Request An Interview</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3Logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>About</p>
        <p>Social Media</p>
        <p>Resume</p>
        <p>Connect</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms and Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Manhattan, Kansas</p>
        <p>785-410-4018</p>
        <p>kevgosoft@yahoo.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 GPT-3. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;