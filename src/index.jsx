import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.html';
import './style.css';
import { jokes } from './jokes.js';
import JokeTemplate from './Joke/index.jsx';

const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => (
          <JokeTemplate
            id={joke.id}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
