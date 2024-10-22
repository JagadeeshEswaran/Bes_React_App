import React from "react";

const InputTextElement = (props) => {
//   console.log(props);

  return (
    <label htmlFor={props.htmlFor}>
      {props.labelValue}
      <input type={props.inputType} name={props.inputName} id={props.inputId} />
    </label>
  );
};

export default InputTextElement;
