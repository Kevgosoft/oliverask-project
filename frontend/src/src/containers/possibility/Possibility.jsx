import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.scss';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Feel out the path to the future</h4>
      <h1 className="gradient__text">Kevin Oliveras <br /> is the one for the job!</h1>
      <p>I once worked a record 56 Hours in one week, not counting hours spent at home working off the clock writing schedules.</p>
      <h4>Thanks for the Opportunity!</h4>
    </div>
  </div>
);

export default Possibility;