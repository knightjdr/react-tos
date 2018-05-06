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
        Translate in
      </div>
      <ReactTos config={{ translateX: '-100px' }}>
        <div className="Transition-container-light">
          Translate in left
        </div>
      </ReactTos>
      <ReactTos config={{ translateX: '100px' }}>
        <div className="Transition-container-light">
          Translate in right
        </div>
      </ReactTos>
      <ReactTos config={{ translateX: '-200px' }}>
        <div className="Transition-container-light">
          Translate in left
        </div>
      </ReactTos>
      <ReactTos config={{ translateX: '200px' }}>
        <div className="Transition-container-light">
          Translate in right
        </div>
      </ReactTos>
    </div>
    <div className="App-transition-container-light">
      <div className="Transition-title-dark">
        Rotate
      </div>
      <ReactTos config={{ rotate: '-90deg' }}>
        <div className="Transition-container-dark">
          Rotate clockwise
        </div>
      </ReactTos>
      <ReactTos config={{ rotate: '90deg' }}>
        <div className="Transition-container-dark">
          Rotate counter clockwise
        </div>
      </ReactTos>
      <ReactTos config={{ rotate: '-180deg' }}>
        <div className="Transition-container-dark">
          Rotate clockwise
        </div>
      </ReactTos>
      <ReactTos config={{ rotate: '180deg' }}>
        <div className="Transition-container-dark">
          Rotate counter clockwise
        </div>
      </ReactTos>
    </div>
    <div className="App-transition-container-dark">
      <div className="Transition-title-light">
        Scale in
      </div>
      <ReactTos config={{ startingOpacity: 1, startingScale: 0.9 }}>
        <div className="Transition-container-light">
          Scale in
        </div>
      </ReactTos>
      <ReactTos config={{ startingOpacity: 1, startingScale: 0.75 }}>
        <div className="Transition-container-light">
          Scale in
        </div>
      </ReactTos>
      <ReactTos config={{ startingOpacity: 1, startingScale: 0.5 }}>
        <div className="Transition-container-light">
          Scale in
        </div>
      </ReactTos>
      <ReactTos config={{ startingOpacity: 1, startingScale: 0.25 }}>
        <div className="Transition-container-light">
          Scale in
        </div>
      </ReactTos>
    </div>
    <div className="App-transition-container-light">
      <div className="Transition-title-dark">
        Combine effect
      </div>
      <ReactTos config={{ startingScale: 0.5 }}>
        <div className="Transition-container-dark">
          Fade and scale in
        </div>
      </ReactTos>
      <ReactTos config={{ translateX: '-200px' }}>
        <div className="Transition-container-dark">
          Fade and translate in
        </div>
      </ReactTos>
      <ReactTos
        config={{
          startingScale: 0.5,
          timingFunction: 'linear',
          transformOrigin: '0 0',
          translateX: '-200px',
        }}
      >
        <div className="Transition-container-dark">
          Translate and scale
        </div>
      </ReactTos>
    </div>
  </div>
);

export default App;
