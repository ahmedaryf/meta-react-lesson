import React from 'react'


function TodoList() {
    const todos = [
        {title: "Exersise", id: 0},
        {title: "Laundry", id: 1},
        {title: "Books", id: 2},
        {title: "Study", id: 3},
        {title: "Work", id: 4},
    ]
  
  return (
    <div style={{border: "2px purple solid", margin: "10px", padding: "10px"}}>
       {todos.map((todo) => {
         return <h5>{[todo.id + 1," ", todo.title]}</h5>})}
    </div>
  )
}

export default TodoList