import React from 'react';
import './Todo.css'
import {FaTrash} from "react-icons/fa"
import axios from 'axios';

function Todo(props) {
    // console.log(props)
  return (<div key={props.todo._id} className='todo-container'>
    <div>
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