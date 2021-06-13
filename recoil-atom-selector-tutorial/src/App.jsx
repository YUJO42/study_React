import React from "react";
import TodoList from "./components/TodoList";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  );
};

export default App;
