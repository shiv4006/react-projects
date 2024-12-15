/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DisplayList } from "./DisplayList";
import { TodoForm } from "./TodoForm";
import styles from './TodoMain.module.css'
import { DateAndTime } from "./DateAndTime";


export const TodoMain = () => {
  const localStorageKey = "todos";
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem({ localStorageKey });
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem({ localStorageKey }, JSON.stringify(data));
  }, [data]);

  const addDataToList = (value, checked) => {
    if (data.includes(value)) return;

    setData((prev) => {
      const updatedData = [...prev, { value, checked }];
      return updatedData;
    });
  };

  const changeCheckValue = (changeEle) => {
    setData((prev) => {
      const updatedData = data.filter((curr) => {
        if (curr.value == changeEle.value)
          curr.checked = !curr.checked;

        return curr;
      });

      return updatedData;
    });
  }

  const deleteElement = (deleteEle) => {
    setData((prev) => {
      const updatedData = data.filter((curr) => {
        return curr.value != deleteEle.value ? curr : "";
      });

      return updatedData;
    });
  }

  const deleteAllData = () => {
    setData([]);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>your todo</h1>

      <DateAndTime />
      <TodoForm addDataToList={addDataToList} />
      <DisplayList data={data} changeCheckValue={changeCheckValue} deleteElement={deleteElement} />

      <button className={`${data.length > 1 ? styles['clear-all'] : styles['clear-all-hidden']}`} onClick={() => deleteAllData()}>
        clear all
      </button>
    </div>
  );
}