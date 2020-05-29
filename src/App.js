import React, { useState } from 'react';
import './App.css';

function Todo({ todo, i }) {
  return (
    <div className="todo">{todo.text}</div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Make a fantastic To Do App',
      isCompleted: false
    },
    {
      text: 'Write a great song to move hearts and minds',
      isCompleted: false
    },
    {
      text: `Make someone's day more amazing than it was before`,
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todos">
        { todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;
