import React from "react";

const TodoListItem = (props) => {
  const { todo } = props;
  return <li key={todo.id}>{todo.title}</li>;
};

export default TodoListItem;
