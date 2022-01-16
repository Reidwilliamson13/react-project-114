import React from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
