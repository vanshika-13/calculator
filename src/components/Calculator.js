import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css'; // Import the CSS file

function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display text={input} />
      <div className="buttons">
        <Button value="(" onClick={handleClick} />
        <Button value=")" onClick={handleClick} />
        <Button value="%" onClick={handleClick} />
        <Button value="AC" onClick={handleClick} />
        <Button value="7" onClick={handleClick} />
        <Button value="8" onClick={handleClick} />
        <Button value="9" onClick={handleClick} />
        <Button value="/" onClick={handleClick} />
        <Button value="4" onClick={handleClick} />
        <Button value="5" onClick={handleClick} />
        <Button value="6" onClick={handleClick} />
        <Button value="*" onClick={handleClick} />
        <Button value="1" onClick={handleClick} />
        <Button value="2" onClick={handleClick} />
        <Button value="3" onClick={handleClick} />
        <Button value="-" onClick={handleClick} />
        <Button value="0" onClick={handleClick} />
        <Button value="." onClick={handleClick} />
        <Button value="=" onClick={handleClick} />
        <Button value="+" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Calculator;
