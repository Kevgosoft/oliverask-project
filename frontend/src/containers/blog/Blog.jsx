import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.scss';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot happening here, <br /> It's Crazzy!</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Feb 1, 2022" text="Go Down the digital rabbit hole!" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Feb 1, 2022" text="Nth Dimmension Visualizer!" />
        <Article imgUrl={blog03} date="Feb 1, 2022" text="Unbound from Limits!" />
        <Article imgUrl={blog04} date="Feb 1, 2022" text="An Array of Genius!" />
        <Article imgUrl={blog05} date="Feb 1, 2022" text="Ready for The Quest!" />
      </div>
    </div>
  </div>
);

export default Blog;