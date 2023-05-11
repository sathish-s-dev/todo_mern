import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TodoWrapper from './components/TodoWrapper';
import AddTodo from './components/AddTodo';

const apiBase = 'http://localhost:3001'


function App() {
  const [newTodo, setNewTodo] = useState(false)
  const [tododata, settodoData] = useState([])
  const [deleteTodo, setDeleteTodo] = useState(true)
  const [complete, setComplete] = useState(false)
  // async function getData(){
  //   const todo = await fetch('http://localhost:3001/todos').then(res => res.json())
  //   settodoData(todo)
  // }
  useEffect(()=>{
      // getData()
        axios.get(apiBase+ '/todos')
        .then(res => {
          const todoarray =res.data
          return settodoData(todoarray)
        }).catch(err => console.error(err))
      }, [newTodo, deleteTodo, complete])
  return (
    <div className="App">
      <div className="container">
      <h1>Todo-App</h1>
      <TodoWrapper data = {tododata} setDeleteTodo={setDeleteTodo} deleteTodo={deleteTodo}
      complete={complete}
      setComplete={setComplete}/>
      <AddTodo apiBase={apiBase} newTodo={newTodo} setNewTodo={setNewTodo}/>
      
      </div>
    </div>
  );
}

export default App;
