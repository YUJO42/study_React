import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './Components/TodoTemplate';
import TodoInsert from './Components/TodoInsert';
import TodoList from './Components/TodoList';

const App = () => {
  function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
      array.push({
        id: i,
        text: `Todo ${i}`,
        checked: false,
      });
    }
    return array;
  }

  const [todos, setTodos] = useState(createBulkTodos);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: 'study react',
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: 'Component Styling',
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: 'Make ToDo App',
  //     checked: false,
  //   },
  // ]);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
