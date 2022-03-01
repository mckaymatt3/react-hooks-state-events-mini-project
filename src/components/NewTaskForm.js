import React, {useState} from "react";
import {v4 as uuid} from 'uuid';

function NewTaskForm({onAddTask, categories}) {  
  const [newText, setNewText] = useState("")
  const [newCategory, setNewCategory] = useState("Code")

  function handleNewItem(event){
    setNewText(event.target.value)
  }

  function handleNewCategory(event){
    setNewCategory(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault();
    console.log(event);
    console.log("Submitted")
    onAddTask({
      text: newText,
      category: newCategory
    })
  }

  const formatCategories = categories.map(function (category){
    return <option key={uuid}> {category} </option>
  })

  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input value={newText} onChange={handleNewItem} type="text" name="text" />
      </label>
      <label>
        Category
        <select value={newCategory} onChange={handleNewCategory} name="category">
          {
            formatCategories
          }
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
