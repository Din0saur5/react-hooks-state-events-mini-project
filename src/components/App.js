import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


 


function App() {
  const [currentTasks, setTaskList] = useState(TASKS)
  const[selectedCategory, setSelectedCategory] = useState("All")
  
  const onTaskFormSubmit = (newTask) => {
    return setTaskList([...currentTasks,newTask])
   }


  let selectedFilter = TASKS
  if(selectedCategory === "All"){
    selectedFilter = currentTasks
  }else{
    selectedFilter = currentTasks.filter(task=>{
    return  task.category === selectedCategory
    })
  }
   console.log(selectedCategory)
  
     
 


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={selectedFilter} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
