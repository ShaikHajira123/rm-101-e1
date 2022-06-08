import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
// import {Tasks} from '../Tasks/Tasks'

const AddTask = ({add}) => {
  // NOTE: do not delete `data-testid` key value pair
  const [text ,setText] = useState("")
  const addtodo = (e) => {
      setText(e.target.value)
  }
  const handleClick = () => {
    add(text)
    setText("")
    console.log(text)
  }
  return (
    <div className={styles.todoForm}>

      <input data-testid="add-task-input" type="text" value={text} onChange={addtodo}/>
      <button data-testid="add-task-button" onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddTask;
