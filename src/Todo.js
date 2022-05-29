import React from 'react'
import "./Todo.css"

export default function Todo({todo, toggleTodo}) {
    function handleTodoClick() {
        toggleTodo(todo.id)
    }
  return (
    <div class="todo-">
        <label>
            {todo.name}
            <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        </label>
    </div>
  )
}
