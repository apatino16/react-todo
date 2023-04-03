import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {
  const [newTodo, setNewTodo] = useState("");
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Todo List </h1>
      <AddTodoForm />
      <p>{newTodo}</p>
      <TodoList />
    </div>
  );
}

export default App;
