/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './TodoForm.module.css'

export const TodoForm = ({addDataToList}) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    
    const value = inputValue.trim();
    if (value) {
      addDataToList(value, false);
      setInputValue("");
    }
  };

  // console.log(inputValue);

  return (
    <form className={styles.form} onSubmit={(e) => handleOnSubmit(e)}>
      <input type="text" placeholder='Add your plan...' value={inputValue} onChange={(event) => handleInputChange(event)} />
      <button type="submit">add</button>
    </form>


  );
}