import React from "react";

const TodoListItem = ({ todo }) => {
  return (
    <li key={todo.id}>
      <>{todo.title}</>
      <button type="button">Remove</button>
    </li>
  );
};

export default TodoListItem;
