import React from 'react';
import './whatGTP3.scss';
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who is Kevin Oliveras" text="A Spirited Professional with Grit and Resourcefulness." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Future Together</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Experience" text="The Transferable Skills of a Seasoned Baker!" />
      <Feature title="Knowledge" text="I only know that I know nothing (Socrates)." />
      <Feature title="Education" text="168 Credit Hours from Kansas State!" />
    </div>
  </div>
)
}


export default WhatGPT3;