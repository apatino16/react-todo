import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`;

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      const todos = data.records.map((todo) => {
        return { id: todo.id, title: todo.fields.title };
      });
      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData(); // eslint-disable-next-line
  }, []);

  const addTodo = async ({ title, id }) => {
    const newTitle = {
      fields: {
        title: title,
        id: id,
      },
    };

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTitle),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const todo = await response.json();
      const newTodo = {
        id: todo.id,
        title: todo.fields.title,
      };

      setTodoList([...todoList, newTodo]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeTodo = async (id) => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`;
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-type": "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const newTodoList = todoList.filter((todo) => todo.id !== id);
      setTodoList(newTodoList);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
              <Link to="/new">NEW TODO</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <h1 style={{ textAlign: "center" }}> Todo List </h1>
                <AddTodoForm onAddTodo={addTodo} />

                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
              </>
            }
          ></Route>
          <Route exact path="/new" element={<h1>New Todo List</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
