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
        return <TodoListItem key={item.id} todo={item} />;
      })}
    </ul>
  );
}

export default TodoList;
