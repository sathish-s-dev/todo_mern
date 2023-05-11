import React from 'react';
import './Todo.css'
import {FaTrash} from "react-icons/fa"
import axios from 'axios';

function Todo(props) {
  const classname = `todo-container ${ props.todo.completed ? "completed": ''}`
    // console.log(props)
  return (<div key={props.todo._id}  
  className={classname}
  >
    <div onClick={(async() => {
    await axios.get(`http://localhost:3001/todo/complete/${props.todo._id}`)
  props.setComplete(!props.complete)})}
  >
    <h3>{props.todo.name}</h3>
    <p>{props.todo.description}</p>
    </div>
    <FaTrash onClick={(() => {
      const id = props.todo._id
      const todo = axios.get(`http://localhost:3001/todo/delete/${id}`)
      props.setDeleteTodo(!props.deleteTodo)
    })}/>
</div>
    )
}

export default Todo