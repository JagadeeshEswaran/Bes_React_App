import React from "react";

const InputTextElement = (props) => {
  // console.log(props.field);

  return (
    <label htmlFor={props.htmlFor}>
      {props.labelValue}
      <input
        type={props.inputType}
        name={props.inputName}
        id={props.inputId}
        value={props.data && props.field ? props?.data[props?.field] : null}
        onChange={(e) =>
          props.handler && props.data && props.field
            ? props?.handler({ ...props?.data, [props?.field]: e.target.value })
            : null
        }
      />
    </label>
  );
};

export default InputTextElement;
