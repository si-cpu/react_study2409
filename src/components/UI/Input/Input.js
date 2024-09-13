import React from 'react';
import styles from '../Input/Input.moduel.scss';

const Input = ({ input, label }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
