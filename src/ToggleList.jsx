// src/components/ToggleList.jsx
import React, { useState } from 'react';
import Draggable from 'react-draggable';

import './ToggleList.css'

const ToggleList = () => {
  const [toggleState, setToggleState] = useState(false);

  const toggleStateUpdate = () => {
    setToggleState(prevState => !prevState);
  };

  return (


    
    <Draggable>
      <card className="card" >
      <div className="toggle-list">
        <button className="toggle-button" onClick={toggleStateUpdate}>
          {toggleState ? 'You got This!' : 'My Ideas'}
        </button>

        {toggleState && (
          <ul>
            <li>Critical Permit</li>
            <li>Buy my own house</li>
            <li>Healthy eyes</li>
            <li>Healthy and beautiful body</li>
            <li>Landed on Customer support team lead</li>
          </ul>
        )}
      </div>
      </card>
    </Draggable>
  );
};

export default ToggleList;
