import React from "react";
import AddTodoForm from "./AddTodoForm";

const InputWithLabel = ({ children, isFocused }) => {
  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={children.todoTitle}
        onChange={children.handleTitleChange}
        autoFocus={isFocused}
      ></input>
    </>
  );
};

export default InputWithLabel;
