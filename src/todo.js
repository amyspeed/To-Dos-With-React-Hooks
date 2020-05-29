import React from 'react';


function Todo({ todo, index, completeTodo, removeTodo }) {
    return (
      <div 
        style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}
        className="todo"
      >
        {todo.text}
        <div>
          <button className="complete" onClick={() => completeTodo(index)}>Complete</button>
          <button className="delete" onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    )
}

export default Todo;