import React, { useState, useEffect } from 'react'; // Import useEffect
import './App.css';

const App = () => {
  const [randomNumber, setRandomNumber] = useState();
  const [randomCode, setRandomCode] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default background color

  // Function to generate a random color
  const generateRandomColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const randomHexCode = '#' + randomNum.toString(16).toUpperCase();
    setRandomNumber(randomNum);
    setRandomCode(randomHexCode);
    setBackgroundColor(randomHexCode); // Set the background color
    navigator.clipboard.writeText(randomHexCode);
  };

  // useEffect to set the initial default color
  useEffect(() => {
    generateRandomColor(); // Call the function to set the default color
  }, []);

  return (
    <div className='main' style={{ backgroundColor }}>
      <div className='container'>
        <h2 id='color-code'>{randomCode}</h2>
        <button id='btn' onClick={generateRandomColor}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default App;
