import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <li key={todo.id}>
      <span>{todo.title}</span>
    </li>
  );
};

export default TodoListItem;
