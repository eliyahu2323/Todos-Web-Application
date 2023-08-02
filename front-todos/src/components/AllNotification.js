import { React, useEffect, useState } from "react";
import axios from "axios";

const AllNotification = async () => {
  const [todos, setTodos] = useState("");

  const handleSumbmit = async (e) => {
    e.preventDefault();
    todos = await axios.get(
      "http://127.0.0.1:8080/api/v1/todo/getAllNotifications"
    );
    console.log(todos);
  };

  setTodos("");

  return (
    <form className="fact-form" onSubmit={handleSumbmit}>
      <div>
        <h1>Todos</h1>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
        <button className="btn btn-large">create</button>
      </div>
    </form>
  );
};

export default AllNotification;
