import React from "react";
import styles from "./task.module.css";

import {Counter} from '../Counter'

const Task = ({task ,handleDelete, Change }) => {
  
  function change() {
    Change({
      ...task,
      done: !task.done,
    });
  }
  
  // NOTE: do not delete `data-testid` key value pair
  return (
    <li data-testid="task" className={styles.task}>
      <input type="checkbox" data-testid="task-checkbox" onChange={change} checked={task.done} />
      
      <div data-testid="task-text"className={task.done? styles.done:styles.notDone}>{task.text}</div>
      <Counter />
      <button data-testid="task-remove-button"onClick={() => handleDelete(task.id)}>X</button>
    </li>
  );
};

export default Task;
