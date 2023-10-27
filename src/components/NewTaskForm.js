import React, { useState } from "react";


function NewTaskForm({categories, onTaskFormSubmit}) {

  const[textValue,setTextValue] = useState('')
  const[selectValue, setSelectValue] = useState('Code')
console.log(textValue)

const handleAdd = (e) => {
  e.preventDefault()
  const newTask ={
    text: textValue,
    category: selectValue
    }
    onTaskFormSubmit(newTask)
    setTextValue('')
    setSelectValue('Code')
}


  return (
    <form className="new-task-form"  onSubmit={handleAdd}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>{setTextValue(e.target.value)}} value = {textValue}/>
      </label>
      <label>
        Category
        <select onChange={(e)=>{setSelectValue(e.target.value)}} value={selectValue} name="category">
          {categories.filter(_=>_!=="All").map(category=>
            <option key={category}  value={category}>{category}</option>
            )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
