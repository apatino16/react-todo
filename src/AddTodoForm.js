import React from "react";

function AddTodoForm() {
  const handleAddTodo = (event) => {
    preventDefault;
    todoTitle = event.title;
    console.log(todoTitle);
  };
  return (
    <form>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle"></input>
      <button>Add</button>
    </form>
  );
}

export default AddTodoForm;
