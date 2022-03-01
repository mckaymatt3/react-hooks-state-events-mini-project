import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with: ", { CATEGORIES, TASKS });

function App() {
  // modify state in the current component you are in, do not pass it down (i.e. don't pass down setTasks to child Component)
  const [displayedTasks, setDisplayedTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  console.log("Current Tasks: ", displayedTasks) 
  
  function onDelete(taskText) {
    //todo: Delete
    console.log("Deleted the Item: ", taskText)
    const filteredTaskList = displayedTasks.filter(function (task){
      return task.text !== taskText
    })
    setDisplayedTasks(filteredTaskList)
  }

  function handleAddTask(newTask) {
    setDisplayedTasks([...displayedTasks, newTask])
  }

  const visibleTasks = displayedTasks.filter(function (task){
    return category === "All" || task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
        <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory} />
        <NewTaskForm categories={CATEGORIES} onAddTask={handleAddTask}/>
        <TaskList tasks={visibleTasks} onDelete={onDelete}/>
    </div>
  );
}

export default App;
