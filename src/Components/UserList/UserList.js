import React, {useState} from 'react'
import Trash from '../../Images/trash.png'
import styles from './UserList.module.css'

const UserList = ({items, setItems, task, counter,setCounter, completeCount, setCompleteCount}) => {
  const trashHandler = () => {
    setItems(items.filter((item) => item.id !== task.id));
    setCounter(counter - 1);
  };
  const handleComplete = () => {
    setItems(items.map((item) => {
      if(item.id === task.id){
        return{...item, completeStatus:!item.completeStatus}
      }
      return item
    }));
    if(task.completeStatus === false){
      setCompleteCount(completeCount + 1);
    }else{
      setCompleteCount(completeCount - 1);
    }
  }

  return (
    <div>
      <ul className={styles.unodered}>
          <li className={styles.list}>
            {" "}
            <span onClick={handleComplete} className={task.completeStatus? styles.complete :"" }
            />
            {task.text} <img className={styles.trash} onClick={trashHandler} src={Trash} alt="Trash can" />
          </li>
      </ul>
    </div>
  );
}

export default UserList
