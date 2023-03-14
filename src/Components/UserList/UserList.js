import React from 'react'
import Trash from '../../Images/trash.png'
import styles from './UserList.module.css'

const UserList = ({items, setItems, task, counter,setCounter}) => {
  const trashHandler = () => {
    setItems(items.filter((item) => item.id !== task.id));
    setCounter(counter - 1);
  };

  return (
    <div>
      <ul className={styles.unodered}>
          <li className={styles.list}>
            {" "}
            <span
            />
            {task.text} <img className={styles.trash} onClick={trashHandler} src={Trash} alt="Trash can" />
          </li>
      </ul>
    </div>
  );
}

export default UserList
