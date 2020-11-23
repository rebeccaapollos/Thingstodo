import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div style={{ margin: `1rem` }}>
      <h1>Todos</h1>
      <ul>
        {todos.map((x) => (
          <li>
            {x.todo}
            <button
              style={{ marginLeft: `1rem` }}
              onClick={() => {
                setTodos(todos.filter((y) => y.id !== x.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <label for="basic-url">Input Todo</label>
      <input
        type="text"
        id="basic-url"
        onKeyPress={(e) => {
          e.key === "Enter" &&
            setTodos([
              ...todos,
              {
                todo: e.target.value,
                checked: false,
                id: Date.now(),
              },
            ]);
          e.key === "Enter" && (e.target.value = "");
        }}
      />
    </div>
  );
};

export default App;
