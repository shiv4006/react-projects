/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { DisplayList } from "./DisplayList";
import { TodoForm } from "./TodoForm";
import styles from './TodoMain.module.css'
import { DateAndTime } from "./DateAndTime";


export const TodoMain = () => {
  const localStorageKey = "todos"; // key for local storage access

  const [data, setData] = useState(() => { // the todo list data -> state
    const savedData = localStorage.getItem({ localStorageKey });
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => { // in case of data change it will automatically add that to local storage
    localStorage.setItem({ localStorageKey }, JSON.stringify(data));
  }, [data]);

  // add received data from form to the data list and with that effect changes reflect to local storage
  const addDataToList = (value, checked) => { 
    let flag = false;
    data.map((curr) => {
      if(curr.value == value) // if value already present then avoid to add again
          flag = true;
    });

    if(flag) // avoid duplication
        return;

    setData((prev) => { // no duplication then add data
      const updatedData = [...prev, { value, checked }]; // prev + new_data
      return updatedData;
    });
  };

  const changeCheckValue = (changeEle) => { // checkbox value change whehter marked completed or not
    setData((prev) => {
      const updatedData = data.filter((curr) => {
        if (curr.value == changeEle.value) // toggling checkbox value
          curr.checked = !curr.checked;

        return curr;
      });

      return updatedData;
    });
  }

  const deleteElement = (deleteEle) => { // deleting element from the list and with effect also from LS
    setData((prev) => {
      const updatedData = data.filter((curr) => {
        return curr.value != deleteEle.value ? curr : "";
      });

      return updatedData;
    });
  }

  const deleteAllData = () => { // emptying list if clear all button is clicked
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