// Timer.jsx

import React, { useState, useEffect } from 'react';
import './timer.css'; // 导入样式文件

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [initialTotalSeconds, setInitialTotalSeconds] = useState(0); // 记录开始时的总秒数

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const handleToggleTimer = () => {
    if (isRunning) {
      setIsRunning(false); // 停止计时器
      setInitialTotalSeconds(totalSeconds); // 记录当前总秒数
    } else {
      setIsRunning(true); // 启动计时器
      setTotalSeconds(0); // 重置总秒数
    }
  };

  // 将总秒数转换为时分秒格式
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">{isRunning ? formatTime(totalSeconds) : formatTime(initialTotalSeconds)}</div>
      <button className="toggle-button" onClick={handleToggleTimer}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    </div>
  );
};

export default Timer;
