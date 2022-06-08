import React from "react";
import { useState } from "react";
import styles from "./taskApp.module.css";
import {v4} from 'uuid'
import { TaskHeader } from "./TaskHeader";
import { AddTask } from './AddTask'
 import {Tasks} from './Tasks'

const TaskApp = ({task}) => {

  const [tasks, setTasks] = useState(task);
  const add = (e) => {



    // if (e && !tasks.map((task) => task.text === e)) {
      const taskobj = {
        id: v4(),
        text: e,
        done: true,
        count: 1,
      };
      setTasks([...tasks, taskobj]);
    // }
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader tasks={tasks}/>
      {/* Add Task */}
      <AddTask add={add}></AddTask>

      {/* Tasks */}
      <Tasks tasks={tasks}/>
    </div>
  );
};

export default TaskApp;
