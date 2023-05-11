import React, { useState } from 'react';
import { FaPlusCircle,FaWindowClose } from 'react-icons/fa';
import './addTodo.css'
import axios from 'axios';

function AddTodo(props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const apibase = props.apiBase
    const submitHandler = async() => {
        const todo = await fetch(`http://127.0.0.1:3001/todo/new`,{
            method:"POST",
            mode:'cors',

            headers:{
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                    name: name,
                    description: description
                })
            })
            // console.log(JSON.stringify({
            //                name: name,
            //                description: description
            //            }))
        }
  return (
    <div>
        <FaPlusCircle className='add-todo' onClick={(() => props.setNewTodo(true))}/>
        {props.newTodo &&<div className='form-container'>
        <form onSubmit={((e) => {
            e.preventDefault()
            submitHandler()
            setName('') 
            setDescription('')
            props.setNewTodo(false)
            })} className="todo-input">
        <FaWindowClose className='close' onClick={(() => props.setNewTodo(false))}/>


            <label htmlFor="name-input">Todo Name: 
                <input type="text" id="name-input" 
                onChange={((e) => setName(e.target.value))} 
                value={name}/>
            </label>
            <label htmlFor='description-input'>Todo Description:
                <input type="text" id="description-input" 
                onChange={((e) => setDescription(e.target.value))} 
                value={description}/>
            </label>
            <button type="submit">Add</button>
        </form>
        </div>
}
    </div>
  )
}

export default AddTodo