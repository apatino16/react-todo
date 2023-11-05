// Import necessary modules
import React, { useState } from "react";
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";
import style from "../App.module.css";

// Create the AddTodoForm component
const AddTodoForm = ({ onAddTodo }) => {
  // State for the todo title
  const [todoTitle, setTodoTitle] = useState("");

  // Function to handle changes in the todo title input
  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };

  // Function to handle adding a new todo
  const handleAddTodo = (event) => {
    event.preventDefault();
    // Create a new todo object with a title and unique id
    const newTodo = {
      title: todoTitle,
      id: Date.now().toString(), // Ensure the ID is a string for consistency
    };

    // Call the onAddTodo function passed as a prop, passing the new todo
    onAddTodo(newTodo);
    // Clear the todo title after adding
    setTodoTitle("");
  };

  // Render the form with an input and button
  return (
    <form onSubmit={handleAddTodo} className={styles.AddTodoForm}>
      <InputWithLabel
        value={todoTitle}
        handleTitleChange={handleTitleChange}
        className={style.typewriter}
      />
      <button type="submit" className={styles.Button}>
        Add
      </button>
    </form>
  );
};

// Define prop types for the AddTodo Form component
AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func.isRequired, // Define onAddTodo prop as a function
};

export default AddTodoForm;
