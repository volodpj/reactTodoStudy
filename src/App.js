import React from 'react';
import TodoItem from './components/todoItem'

import todos from './api/todos';
import './App.css';

function App() {
  console.log(todos)
  return (
    <div className="App">
      <TodoItem todos = {todos}/>
      
    </div>
  );
}

export default App;
