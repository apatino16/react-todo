import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoContainer from "./components/TodoContainer";
import styles from "./App.module.css";

const tableName = process.env.REACT_APP_TABLE_NAME;
const baseName = process.env.REACT_APP_AIRTABLE_BASE_ID;
const apiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/new">New Todo</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TodoContainer
                tableName={tableName}
                baseName={baseName}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route exact path="/new" element={<h1>New Todo List</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
