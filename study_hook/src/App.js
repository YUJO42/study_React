import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(9);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  console.log(typeof count);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count * 2)}>CLICK!!!</button>
    </div>
  );
}

export default App;
