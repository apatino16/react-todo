import React from "react";
import AddTodoForm from "./AddTodoForm";

const InputWithLabel = ({ children, isFocused }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label htmlFor="todoTitle">{children}</label>
      <input
        ref={inputRef}
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
