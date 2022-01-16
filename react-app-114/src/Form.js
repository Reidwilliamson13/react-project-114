import React from "react";

export const Form = ({ inputText, setInputText, setTodos, todos }) => {
  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const inputSubmit = () => {
    setTodos([...todos, { text: inputText }]);
  };

  return (
    <div className="input__container">
      <div className="input__button">
        <input type="text" value={inputText} onChange={inputChange} />
        <button>ADD</button>
      </div>
    </div>
  );
};

export default Form;
