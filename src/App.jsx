import React from "react";
import TaskApp from "./components/TaskApp";
// import Task from './components/Task/Task'
// import Tasks from "./components/Tasks/Tasks"



import task from "./data/tasks.json"
function App() {
  return (
    <div>
  <TaskApp task={task} />
 
 
  </div>
  )
}

export default App;
