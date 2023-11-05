import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

const TodoList = ({ todoList, onRemoveTodo }) => (
  <div className={styles.List}>
    {todoList.map((todo) => (
      <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
    ))}
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object),
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
