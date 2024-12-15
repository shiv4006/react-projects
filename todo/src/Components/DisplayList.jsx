/* eslint-disable react/prop-types */
import styles from './DisplayList.module.css'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";

export const DisplayList = ({ data, changeCheckValue, deleteElement}) => {
  const handleCheckChange = (currEle) => {
    changeCheckValue(currEle);
  }

  const handleDelete = (currEle) => {
    deleteElement(currEle);
  }

  return (
    <ul className={styles.lists}>
      {
        data.map((currEle, ind) => {
          return (
            <li key={ind} className={styles['list-item']}>
              <span className={`${currEle.checked ? styles['line-through'] : styles['no-line-through']}`}>{currEle.value}</span>

              <div className={styles.buttons}>
                <button className={styles['check-btn']}>
                  <RiCheckboxBlankCircleLine className={`${styles.uncheck} ${!currEle.checked ? styles.active : ''}`} onClick={() => handleCheckChange(currEle)}/>
                  <RiCheckboxCircleLine className={`${styles.checked} ${currEle.checked ? styles.active : ''}`} onClick={() => handleCheckChange(currEle)}/>
                </button>
              
                <button className={styles['delete-btn']}>
                  <MdOutlineDeleteForever className={styles.delete} onClick={() => handleDelete(currEle)}/>
                </button>
              </div>

            </li>
          );
        })
      }
    </ul>
  );
}