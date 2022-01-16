import React from "react";

export const Form = ({ inputText, setInputText, setTodos }) => {
  const inputChange = (e) => {
    setInputText(e.target.value);
  };

  const inputSubmit = () => {
    setTodos([...todos]);
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
