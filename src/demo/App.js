import React from 'react';
import ReactTos from '../lib';

import Arrow from './arrow.svg';
import Github from './github.svg';

import './App.css';

const App = () => (
  <div className="App">
    <div className="App-landing-container">
      <div className="App-landing">
        <p>React transition-on-scroll (react-tos) applies transition effects to elements
        as they enter the view while scrolling.
        </p>
        <p>
          <a href="https://github.com/knightjdr/react-tos">
            <img
              alt="Github link"
              src={Github}
            />
          </a>
        </p>
        <p>
          Scroll down to begin
        </p>
        <img
          alt="Scroll down"
          className="App-arrow"
          src={Arrow}
        />
      </div>
    </div>
    <div className="App-transition-container-light">
      <div className="Transition-title-dark">
        Fade in
      </div>
      <ReactTos>
        <div className="Transition-container-dark">
          Fade in
        </div>
      </ReactTos>
      <ReactTos>
        <div className="Transition-container-dark">
          Fade in
        </div>
      </ReactTos>
      <ReactTos>
        <div className="Transition-container-dark">
          Fade in
        </div>
      </ReactTos>
    </div>
    <div className="App-transition-container-dark">
      <div className="Transition-title-light">
        Fade in
      </div>
      <ReactTos>
        <div className="Transition-container-light">
          Fade in
        </div>
      </ReactTos>
      <ReactTos>
        <div className="Transition-container-light">
          Fade in
        </div>
      </ReactTos>
      <ReactTos>
        <div className="Transition-container-light">
          Fade in
        </div>
      </ReactTos>
    </div>
  </div>
);

export default App;
