// its just a function!
import uuidv1 from "uuid/v1";

const DEFAULT_STATE = {
  todos: [
    {
      task: "Eat",
      id: uuidv1()
    },
    {
      task: "Sleep",
      id: uuidv1()
    }
  ]
};

export default function(state = DEFAULT_STATE, action) {
  if (action.type === "REMOVE_TODO") {
    let newTodos = state.todos.filter(todo => todo.id !== action.id);
    return { ...state, todos: newTodos };
  }
  return state;
}
