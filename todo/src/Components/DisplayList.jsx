/* eslint-disable react/prop-types */
import styles from './DisplayList.module.css'
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { MdOutlineDeleteForever } from "react-icons/md";

export const DisplayList = ({ data }) => {
  return (
    <ul className={styles.lists}>
      {
        data.map((currEle, ind) => {
          return (
            <li key={ind} className={styles['list-item']}>
              <span>{currEle}</span>

              <div className={styles.buttons}>
                <button className={styles['check-btn']}>
                  <RiCheckboxBlankCircleLine className={styles.uncheck} />
                  <RiCheckboxCircleLine className={styles.checked} />
                </button>
              
                <button className={styles['delete-btn']}>
                  <MdOutlineDeleteForever className={styles.delete} />
                </button>
              </div>

            </li>
          );
        })
      }
    </ul>
  );
}
