import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

const TodoList = ({ todoList, onRemoveTodo }) => (
  <ul>
    {todoList.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
  </ul>
);

// Define prop types for the component
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object), // Define  as a function
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
