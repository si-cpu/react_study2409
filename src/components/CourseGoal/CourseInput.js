import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');
  const [isValid, setIsValid] = useState(true);
  const textChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault(); // form기능 중지
    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    onAdd(enteredText); // APP.js에게 입력값 넘기기
    setEnteredText(''); //
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid ? 'invalid' : ''}`}>
        <label>나의 목표</label>
        <input
          style={{
            background: isValid ? 'transparent' : 'salmon',
            borderColor: isValid ? 'black' : 'red',
          }}
          type='text'
          value={enteredText}
          onChange={textChangeHandler}
        />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
