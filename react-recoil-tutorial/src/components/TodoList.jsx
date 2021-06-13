import React from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms.js";
import { TodoItemCreator } from "./TodoItemCreator.jsx";
import { TodoListItem } from "./TodoListItem.jsx";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoListItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
