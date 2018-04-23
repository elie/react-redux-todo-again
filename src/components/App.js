import React, { Component } from "react";
import TodoList from "../containers/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>See your todos!</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
