import React, { useState } from "react";
import Button from "./Button";

import Header from "./Header";

import plus from "../Images/plus.png";
import styles from "./all.module.css";

const AddUser = ({onTask, counter,setCounter}) => {
  const [task, setTask] = useState("");
  

  const createTaskHandler = (event) => {
    event.preventDefault();

    if (task.trim().length === 0) {
      return;
    }

    console.log(task);
    setTask("");
    setCounter((prevCounter) => prevCounter + 1);
    onTask(task);
  };
  const enteredTask = (event) => {
    setTask(event.target.value);
  };
  return (
    <div>
      <section>
        <Header />
      </section>
      <form onSubmit={createTaskHandler} className={styles.form}>
        <input
          placeholder="Add a new task"
          value={task}
          onChange={enteredTask}
          className={styles.input}
        />
        <Button type="submit">
          Create <img src={plus} alt="plus" />
        </Button>
      </form>
      <div className={styles.stats}>
        {/* <CheckStats score = {counter} /> */}
        <p>
          Created Tasks <span>{counter}</span>
        </p>
        <p>
          Completed <span>0</span>
        </p>
      </div>
    </div>
  );
};

export default AddUser;
