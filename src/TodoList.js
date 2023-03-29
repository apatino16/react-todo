import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { objectID: 0, title: "Prepare lunch for work." },
  { objectID: 1, title: "Submit CTD homework." },
  { objectID: 2, title: "Read next week's lesson." },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return; // Inside the map() method, use the TodoListItem component
        // Pass key as a prop equal to the id of the todo object
        // Pass todo as a prop
      })}
    </ul>
  );
}

export default TodoList;
