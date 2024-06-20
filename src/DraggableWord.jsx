// src/components/DraggableWord.jsx
import React from 'react';
import Draggable from 'react-draggable';
import './DraggableWord.scss';

const DraggableWord = ({ word }) => {
  const handleClick = (e) => {
   
  };

  return (
    <Draggable>
      <div className="draggable-word" onClick={handleClick}>
        {word}
      </div>
    </Draggable>
  );
};

export default DraggableWord;
