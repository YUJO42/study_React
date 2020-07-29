import React from "react";
import "./App.css";
import Counter from "./Hooks/Counter";
import Info from "./Hooks/Info";
import Average from "./Hooks/Average_useCallback";

function App() {
  return (
    <React.Fragment>
      <Counter />
      <Info />
      <Average />
    </React.Fragment>
  );
}

export default App;
