import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      <b data-testid="header-remaining-task">Umcompleted Tasks: {unCompletedTask}</b>
      <b data-testid="header-total-task">Total Tasks : {totalTask}</b>
    </div>
  );
};

export default TaskHeader;
