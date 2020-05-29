import React, { useState, useEffect } from 'react';


function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
  
    const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }

    useEffect(() => {
        console.log('useEffect called');
        return () => {
            console.log('unmount');
        };
      }, [value]);
  
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

export default TodoForm;