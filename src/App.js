import React from "react";

const todoList = [
  { objectID: 0, title: "Prepare lunch for work." },
  { objectID: 1, title: "Submit CTD homework." },
  { objectID: 2, title: "Read next week's lesson." },
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}> Todo List </h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.objectID}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
