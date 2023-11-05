import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.InputWithLabel}>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
        className={styles.Input}
        placeholder="Enter todo..."
      ></input>
    </div>
  );
};

// Define prop types for the component
InputWithLabel.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputWithLabel;
