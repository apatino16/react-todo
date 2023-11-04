// Import necessary modules
import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";

// Create the AddTodoForm component
const AddTodoForm = ({ onAddTodo }) => {
  // State for the todo title
  const [todoTitle, setTodoTitle] = useState("");

  // Function to handle changes in the todo title input
  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  };

  // Function to handle adding a new todo
  const handleAddTodo = (event) => {
    event.preventDefault();
    // Create a new todo object with a title and unique id
    const newTodo = {
      title: todoTitle,
      id: Date.now(),
    };
    // Call the onAddTodo function passed as a prop, passing the new todo
    onAddTodo(newTodo);
    // Clear the todo title after adding
    setTodoTitle("");
  };

  // Render the form with an input and button
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        todoTitle={todoTitle}
        handleTitleChange={handleTitleChange}
      >
        <strong>Title:</strong>
      </InputWithLabel>
      <button type="submit">Add</button>
    </form>
  );
};

// Define prop types for the AddTodo Form component
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func, // Define onAddTodo prop as a function
};

export default AddTodoForm;
