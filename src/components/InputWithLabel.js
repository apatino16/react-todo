import React from "react";
import PropTypes from "prop-types";

const InputWithLabel = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        ref={inputRef}
        type="text"
        id="todoTitle"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
      ></input>
    </>
  );
};

// Define prop types for the component
InputWithLabel.propTypes = {
  props: PropTypes.func, // Define props as a function
};

export default InputWithLabel;
