import React, { useState } from 'react';
import DraggableWord from './DraggableWord';
import InputForm from './InputForm';
import Timer from './Timer'; // 导入 Timer 组件
import './App.css';
import './starsAnimation'; // 引入星星动画脚本

const App = () => {
  const [text, setText] = useState('Manifest Now');
  const [words, setWords] = useState([]);

  const handleClick = () => {
    setText((prevText) => (prevText === 'Manifest Now' ? 'Wish come true!' : 'Manifest Now'));
  };

  const handleAddWord = (word) => {
    setWords((prevWords) => [...prevWords, word]);
  };

  const handleDeleteWord = (index) => {
    setWords((prevWords) => prevWords.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1 onClick={handleClick}>{text}</h1>
      <p>You are the creator.</p>

      <InputForm onAddWord={handleAddWord} />
      
      {/* 添加 Timer 组件 */}
      <Timer />

      <div className="word-container">
      {words.map((word, index) => (
          <DraggableWord key={index} word={word} onDelete={() => handleDeleteWord(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
