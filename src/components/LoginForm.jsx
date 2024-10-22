import React from "react";
import InputTextElement from "./InputTextElement";

const LoginForm = () => {
  return (
    <form className="d-flex w-100 flex-column justify-content-evenly align-items-center h-100">
       <InputTextElement
        htmlFor={"username"}
        labelValue={"Username :"}
        inputType={"text"}
        inputName={"username"}
        inputId={"username"}
      />

      <InputTextElement
        htmlFor={"password"}
        labelValue={"Password :"}
        inputType={"password"}
        inputName={"password"}
        inputId={"password"}
      />

      <article>
        <button>Sign In</button>
      </article>
    </form>
  );
};

export default LoginForm;
