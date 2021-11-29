import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Muita coisa está acontecendo, <br /> Estamos blogando sobre isso.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Set 26, 2021" text="GPT-3 e OpenAI são o futuro. Vamos explorar como é??" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Set 26, 2021" text="GPT-3 e OpenAI são o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog03} date="Set 26, 2021" text="GPT-3 e OpenAI são o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog04} date="Set 26, 2021" text="GPT-3 e OpenAI são o futuro. Vamos explorar como é?" />
        <Article imgUrl={blog05} date="Set 26, 2021" text="GPT-3 e OpenAI são o futuro. Vamos explorar como é?" />
      </div>
    </div>
  </div>
);

export default Blog;