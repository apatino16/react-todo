import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={styles.ListItem}>
      {todo.title}
      <button
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
        className={styles.RemoveButton}
      >
        Remove
      </button>
    </li>
  );
};

// Define prop types for the component
TodoListItem.propTypes = {
  todo: PropTypes.func, // Define  as a function
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
