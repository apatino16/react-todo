import React from "react";
import styles from "./TodoListItem.module.css";

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

export default TodoListItem;
