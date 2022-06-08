import React from "react";
import {useState} from 'react'
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [count , setCount] = useState(0)
  // let count = 0;
  const handleIncrement =()=> {
    setCount(count+1)
  }
  const handleDecrement =()=> {
    if(count==1){
      return
    }
    setCount(count-1)
  }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button data-testid="task-counter-increment-button" onClick={handleIncrement}>+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button data-testid="task-counter-decrement-button" onClick={handleDecrement}>-</button>
    </div>
  );
};

export default Counter;
