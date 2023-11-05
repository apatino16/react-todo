import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import PropTypes from "prop-types";
import styles from "./TodoContainer.module.css";

const TodoContainer = ({ tableName, baseName, apikey }) => {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortDirection, setSortDirection] = useState("asc"); // Default is ascending order
  const url = `https://api.airtable.com/v0/${baseName}/${tableName}`;

  const fetchData = async () => {
    const queryParam = `sort[0][field]=title&sort[0][direction]=${sortDirection}`; // Adjust the field for sorting
    const urlWithQueryParam = `${url}?${queryParam}`;
    try {
      const response = await fetch(urlWithQueryParam, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apikey}`,
        },
      });

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
  }, [tableName, sortDirection]);

  const addTodo = async ({ title }) => {
    const newTitle = {
      fields: {
        title: title,
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

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className={styles.TodoContainer}>
      <h1>{tableName}</h1>

      <div className={styles.AddTodoForm}>
        <AddTodoForm onAddTodo={addTodo} />

        <button
          className={styles.sortButton}
          type="button"
          title="sort by title"
          onClick={toggleSortDirection}
        >
          SORT
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </div>
  );
};

TodoContainer.propTypes = {
  tableName: PropTypes.string.isRequired,
  baseName: PropTypes.string.isRequired,
  apikey: PropTypes.string.isRequired,
};

export default TodoContainer;
