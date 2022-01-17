import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./Form";
import TodoList from "./TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

const [option,setOption] = useState('all')
const [changer, setChanger] = useState([])


useEffect(() => {
  changeOptions()
}, [todos,option])


const changeOptions = () => {
  switch(option) {
    case 'finished':
      setChanger(todos.filter(todo => {
        return todo.completed === true
      }))
      break:

      case 'uncompleted':
        setChanger(todos.filter(todo => {
          return todo.completed === false
        }))
        break:
        default:
          setChanger(todos)
          break
  }
}

  return (
    <div className="App">
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        option={option}
        setOption={setOption}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
