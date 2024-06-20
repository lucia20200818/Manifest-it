// src/components/InputForm.jsx
import React, { useState } from 'react';
import './App.css'

const InputForm = ({ onAddWord }) => {
  const [wordInput, setWordInput] = useState('');

  const handleInputChange = (e) => {
    setWordInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && wordInput.trim() !== '') {
      onAddWord(wordInput.trim());
      setWordInput('');
    }
  };

  const handleAddButtonClick = () => {
    if (wordInput.trim() !== '') {
      onAddWord(wordInput.trim());
      setWordInput('');
    }
  };

  return (
    <div className="input-form">
      <input
        type="text"
        value={wordInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // 监听按键事件
        placeholder="Enter a word"
        className="input"
      />
      
      <button className="add-word-button" onClick={handleAddButtonClick}>
        Add Word
      </button>
    </div>
  );
};

export default InputForm;
