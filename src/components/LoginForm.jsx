import React from "react";
import InputTextElement from "./InputTextElement";
import Button from "./Button";

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
        <Button title="Sign In" bsStyles={"btn btn-primary"} />
      </article>
    </form>
  );
};

export default LoginForm;
