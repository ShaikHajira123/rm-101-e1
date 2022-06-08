import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
import data from '../../data/tasks.json'

const Tasks = () => {
  // NOTE: do not delete `data-testid` key value pair
  console.log(data)
  return (
    <>
   
      <ul data-testid="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map((e)=>{

        return (<li>{e.text }-  <Task />  </li> )
       
        })}
      
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
