import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  constructor(props) {
    super(props);
    console.log("props");
  }

  componentDidMount() {
    console.log("componentDidmount");
  }

  componentDidUpdate() {
    console.log("component Didupdate");
  }

  componentWillUnmount() {
    console.log("Goobye");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>I`m class {this.state.count}</h1>;
        <button onClick={this.add}>Add</button>;
        <button onClick={this.minus}>minus</button>;
      </div>
    );
  }
}

export default App;
