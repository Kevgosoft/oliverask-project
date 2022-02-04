import React from 'react';
import logo from '../../assets/logo.png';
import './navbar.scss';

const Navbar = () => {

  return (
  <div className="gpt3__navbar">
    <div className="gpt3__navbar-links">
      <div className="gpt3__navbar-links_logo">
        <img src={logo} alt="logo" />
      </div>
      <div className='gpt3__navbar-links_container'>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">Who is K.O.?</a></p>
        <p><a href="#possibility">Possibilities</a></p>
        <p><a href="#features">Strengths</a></p>
        <p><a href="#blog">Articles</a></p>
      </div>
    </div>
    <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
    </div>
  </div>
  )};

//BEM -> Block Element Modifier (Lookup)


export default Navbar;