import React from "react";
import AddTodoForm from "./AddTodoForm";

const InputWithLabel = ({ children }) => {
  return (
    <>
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={children.todoTitle}
        onChange={children.handleTitleChange}
      ></input>
    </>
  );
};

export default InputWithLabel;
