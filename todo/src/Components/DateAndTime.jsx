/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import styles from './DateAndTime.module.css'

export const DateAndTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <p>{dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}</p>
    </div>

  );
}