import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle}
        onChange={handleTitleChange}
      ></input>
    </>
  );
};

// Define prop types for the component
InputWithLabel.propTypes = {
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputWithLabel;
