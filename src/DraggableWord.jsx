// src/components/DraggableWord.jsx
import React from 'react';
import Draggable from 'react-draggable';
import './DraggableWord.scss';

const DraggableWord = ({ word, onDelete }) => {
  return (
    <Draggable>
      <div className="draggable-word">
        {word}
        <button className="delete-word-button" onClick={onDelete}>
          ✕
        </button>
      </div>
    </Draggable>
  );
};

export default DraggableWord;
