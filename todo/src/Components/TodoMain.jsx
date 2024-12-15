/* eslint-disable no-unused-vars */
import {useEffect, useState} from "react";
import { DisplayList } from "./DisplayList";
import { TodoForm } from "./TodoForm";
import styles from './TodoMain.module.css'
import { DateAndTime } from "./DateAndTime";


export const TodoMain = () => {
  const localStorageKey = "todos";
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem({localStorageKey});
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem({localStorageKey}, JSON.stringify(data));
  }, [data]);

  const addDataToList = (value) => {
    if(data.includes(value)) return;
    
    setData((prev) => {
      const updatedData = [...prev, value];
      return updatedData;
    });
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>your todo</h1>
      <DateAndTime />
      <TodoForm addDataToList={addDataToList}/>
      <DisplayList data={data}/>
    </div>


  );
}