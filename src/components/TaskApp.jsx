import React from "react";
import { useState } from "react";
import styles from "./taskApp.module.css";
import {v4} from 'uuid'
import { TaskHeader } from "./TaskHeader";
import { AddTask } from './AddTask'
 import {Tasks} from './Tasks'

const TaskApp = ({task}) => {

  const [tasks, setTasks] = useState(task);

  const handleDelete = (e) => {

    let haj = tasks.filter((el) => el.id !== e)
    setTasks(haj)
  };

  const add = (e) => {
    if (e && !tasks.some((task) => task.text === e)) {
      const obj = {
        id: v4(),
        text: e,
        done: true,
        count: 1,
      };
      setTasks([...tasks,obj]);
    }
  };
  // NOTE: do not delete `data-testid` key value pair
  const Change = (e) => {
    let haj = tasks.reduce((ac, cur) => {
      if (cur.id === e.id) {
        ac.push(e);
      } else {
        ac.push(cur);
      }
      return ac;
    }, []);
    setTasks([...haj]);
  };

  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks}/>
      {/* Add Task */}
      <AddTask add={add}></AddTask>

      {/* Tasks */}
      <Tasks tasks={tasks} handleDelete={handleDelete} Change={Change}/>
    </div>
  );
};

export default TaskApp;
