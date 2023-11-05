import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => (
  <ul className={styles.List}>
    {todoList.map((todo) => (
      <li key={todo.id} className={styles.ListItem}>
        <TodoListItem todo={todo} onRemoveTodo={onRemoveTodo} />
      </li>
    ))}
  </ul>
);

// Define prop types for the component
TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object), // Define  as a function
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
