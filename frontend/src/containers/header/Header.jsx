import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.scss';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Kevin Oliveras Built Something Amazing For Purple Wave</h1>
      <p>I am the man.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>1,000,000's ... People will come! (If you build it)</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="AI Head" />
    </div>
  </div>
);

export default Header;