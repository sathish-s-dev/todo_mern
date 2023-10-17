import React, { useRef } from 'react';
import { FaPlusCircle,FaWindowClose } from 'react-icons/fa';
import './addTodo.css'
// import axios from 'axios';

function AddTodo(props) {
    const nameRef = useRef()
    const descriptionRef = useRef()
    // const [name, setName] = useState('')
    // const [description, setDescription] = useState('')
    const submitHandler = async() => {
        const todo = await fetch(`http://127.0.0.1:3001/todo/new`,{
            method:"POST",
            mode:'cors',

            headers:{
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify({
                    name: nameRef.current.value,
                    description: descriptionRef.current.value
                })
            })
            console.log(todo);
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
            nameRef.current.value=''
            descriptionRef.current.value=''
            // setName('') 
            // setDescription('')
            props.setNewTodo(!props.newTodo)
            })} className="todo-input">
        <FaWindowClose className='close' onClick={(() => props.setNewTodo(false))}/>


            <label htmlFor="name-input">Todo Name: 
                <input type="text" id="name-input" ref={nameRef}
                // onChange={((e) => setName(e.target.value))} value={name}
                />
            </label>
            <label htmlFor='description-input'>Todo Description:
                <input type="text" id="description-input" ref={descriptionRef}
                // onChange={((e) => setDescription(e.target.value))} value={description}
                />
            </label>
            <button type="submit">Add</button>
        </form>
        </div>
}
    </div>
  )
}

export default AddTodo