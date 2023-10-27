import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks, setTaskList}) {
  console.log(tasks)

  const handleDelete = (targetTask) => {
    const survivingTasks = tasks.filter((task)=>
      task.text !== targetTask)
    console.log(survivingTasks)
    setTaskList(survivingTasks)
  }



  return (
    <div className="tasks">
      {tasks.map((task)=>{
      return  <Task handleDelete={handleDelete} key={task.text} {...task}/>
      })}
    </div>
  );
}

export default TaskList;
