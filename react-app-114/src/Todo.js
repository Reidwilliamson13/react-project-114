import { Done, Close } from "@material-ui/icons";
import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteItem = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeItem = () => {
    setTodos(
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
      <div className={todo.completed ? 'completed' : 'notYet'}>{text}</div>
      <Done onClick={completeItem} className="icon" />
      <Close onClick={deleteItem} className="icon" />
    </div>
  );
};

export default Todo;
