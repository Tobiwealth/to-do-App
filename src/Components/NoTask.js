import React from "react";
import Clip from "../Images/Clipboard.png";
import styles from "./all.module.css";
const NoTask = () => {
  return (
    <div className={styles.notask}>
      <img src={Clip} alt="clipboard" />
      <p>
        You don't have tasks registered yet. <br/>Create tasks and organize your to-do
        items.
      </p>
    </div>
  );
};

export default NoTask;
