import React from 'react'
import Todo from './Todo'

function TodoWrapper(props) {
    const todoarray = props.data
    // console.log(todoarray)
    return<>
   { todoarray.map((item) => {
    // console.log(item._id)
        return <Todo todo={item}  
        key={item._id} 
        deleteTodo={props.deleteTodo} 
        setDeleteTodo={props.setDeleteTodo}
        complete={props.complete}
        setComplete={props.setComplete}/>
   
    })}
    </>
}

export default TodoWrapper