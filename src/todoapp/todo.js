import React, { useEffect } from "react";
import "./todo.css"
import AddTask from "./addTask";
import ListTask from "./listTask";
import { useState } from "react";
const Todo = () => {
    const [tasks,setTasks]=useState([]);

    useEffect(()=>{
      document.title =`You have ${tasks.length} pending tasks(s)`
    });

    const addTask =(title)=>{
      const newTask = [...tasks,{title}]
      setTasks(newTask)
    }

    const removeTask = (index)=>{
      const newTask = [...tasks]
      newTask.splice(index,1)
      setTasks(newTask)
    }

  return (
    <>
      <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task">
           <AddTask addTask={addTask} />
        </div>
        <div className="tasks">
          {tasks.map((tasks,index)=>(
            <ListTask tasks={tasks} removeTask={removeTask} index={index} key={index}/>

          ))}         
        </div>
      </div>
    </>
  );
};

export default Todo;
