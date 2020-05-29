import React, { useState, useReducer } from 'react';

import Todo from './todo';
import TodoForm from './todoForm';
import Count from './count';

import './App.css';


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

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Fun Times with React Hooks</h1>
      <h2>Here's a to do list with <span className="hook">useState</span>!</h2>
      <div className="todo-list">
        { todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} removeTodo={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <h2>And now a random <span className="hook">useReducer</span> Counter!</h2>
      <Count />
    </div>
  )
}

export default App;
