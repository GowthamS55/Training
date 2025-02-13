import React, { useReducer, useState } from "react";
import { todoReducer, initialState } from "./TodoReducer";

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TODO", payload: task }) ;
      setTask("");
    }
  };

  return (
    <>
      
    </>
    // <div>
    //   <h2>To-Do List</h2>
    //   <input
    //     type="text"
    //     value={task}
    //     onChange={(e) => setTask(e.target.value)}
    //     placeholder="Enter task..."
    //   />
    //   <button onClick={addTodo}> Add</button>

    //   <ul>
    //     {state.map((todo) => (
    //       <li key={todo.id}>
    //         <span style={{ color: todo.status === "COMPLETED" ? "green" : "red" }}>
    //           {todo.text} ({todo.status})
    //         </span>
    //         {todo.status === "PENDING" && (
    //           <button onClick={() => dispatch({ type: "MARK_COMPLETED", payload: todo.id })}>
    //              Complete
    //           </button>
    //         )}
    //         <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>
    //            Delete
    //         </button>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};

export default TodoApp;
