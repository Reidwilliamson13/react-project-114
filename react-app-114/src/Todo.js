import { Done, Close } from "@material-ui/icons";
import React from "react";

const Todo = ({ text, todo, todos, setTodo }) => {
  const deleteItem = () => {
    setTodo(todo.filter((element) => element.id !== todo.id));
  };

  const completeItem = () => {
    setTodo(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo__container">
      <div>{text}</div>
      <Done onClick={completeItem} />
      <Close onClick={deleteItem} />
    </div>
  );
};

export default Todo;
