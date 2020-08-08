import React, { useState } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'study react',
      checked: true,
    },
    {
      id: 2,
      text: 'Component Styling',
      checked: true,
    },
    {
      id: 3,
      text: 'Make ToDo App',
      checked: false,
    },
  ]);
  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;
