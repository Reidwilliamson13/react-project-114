import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const [option, setOption] = useState("all");
  const [changer, setChanger] = useState([]);

  useEffect(() => {
    getFromLocal();
  }, []);

  useEffect(() => {
    changeOptions();
    saveToLocal();
  }, [todos, option]);

  const changeOptions = () => {
    switch (option) {
      case "finished":
        setChanger(
          todos.filter((todo) => {
            return todo.completed === true;
          })
        );
        break;

      case "uncompleted":
        setChanger(
          todos.filter((todo) => {
            return todo.completed === false;
          })
        );
        break;
      default:
        setChanger(todos);
        break;
    }
  };

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let local = JSON.parse(localStorage.getItem("todos"));
      setTodos(local);
    }
  };

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        option={option}
        setOption={setOption}
        changer={changer}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
