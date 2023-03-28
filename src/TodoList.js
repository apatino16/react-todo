import React from "react";

const todoList = [
  { objectID: 0, title: "Prepare lunch for work." },
  { objectID: 1, title: "Submit CTD homework." },
  { objectID: 2, title: "Read next week's lesson." },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <li key={item.objectID}>{item.title}</li>;
      })}
    </ul>
  );
}

export default TodoList;
