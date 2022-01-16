import React from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  const [todos, setTodos] = useState[];
  return (
    <div className="App">
      <Form inputText={inputText}/>
      <TodoList />
    </div>
  );
}

export default App;
