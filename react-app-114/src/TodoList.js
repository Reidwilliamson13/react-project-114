import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, SetTodos }) => {
  return (
    <div className="list__container">
      <div className="todos">
        {todos.map((todo) => {
          return <Todo todos={todos} setTodos={setTodos} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
