import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      setTodos(todos);
    }
    fetchData();
  }, []);

  const totalPages = Math.ceil(todos.length / perPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;

  const visibleTodos = todos.slice(firstIndex, lastIndex);
  const isFirstPage = currentPage !== 1;
  const isLastPage = currentPage !== totalPages;

  const nextPageHandler = () => isLastPage && setCurrentPage(currentPage + 1);

  const prevPageHandler = () => isFirstPage && setCurrentPage(currentPage - 1);

  return (
    <>
      Per Page:
      <select onChange={(e) => setPerPage(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      <div>
        <h1>Todos</h1>
        <div>
          {visibleTodos.map((todo) => (
            <p key={todo.id}>{todo.title} </p>
          ))}
        </div>
        {isFirstPage && <span onClick={prevPageHandler}>Prev</span>}
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "active" : ""}
            >{` ${page} |`}</span>
          ))}
        </p>
        {isLastPage && <span onClick={nextPageHandler}>Next</span>}
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
