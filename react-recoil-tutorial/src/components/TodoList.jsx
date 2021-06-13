import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../selectors.js";
import { TodoItemCreator } from "./TodoItemCreator.jsx";
import TodoListFilters from "./TodoListFilters.jsx";
import { TodoListItem } from "./TodoListItem.jsx";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoListItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
};

export default TodoList;
