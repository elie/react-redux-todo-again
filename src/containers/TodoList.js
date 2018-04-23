import React, { Component } from "react";
import { connect } from "react-redux"; // ++Charmaine
import { removeTodo } from "../actions/actionCreators";

class TodoList extends Component {
  removeTodo = id => {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    });
  };
  render() {
    let todos = this.props.todos.map(todo => (
      <li key={todo.id}>
        {todo.task}
        <button onClick={() => this.removeTodo(todo.id)}>X</button>
      </li>
    ));
    return (
      <div>
        Hello from TodoList!
        <ul>{todos}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
