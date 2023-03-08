import React from 'react'
import Trash from '../../Images/trash.png'
import styles from './UserList.module.css'
const UserList = (props) => {

  return (
    <div>
      <ul className={styles.unodered}>
        {props.items.map((lists) => {
          return (
            <li key={lists.id} className={styles.list}>
              {" "}
              <span
              />
              {lists.text} <img src={Trash} alt="Trash can" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList
