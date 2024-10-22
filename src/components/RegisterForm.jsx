import React from "react";
import InputTextElement from "./InputTextElement";

const RegisterForm = () => {
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

      <InputTextElement
        htmlFor={"username"}
        labelValue={"Username :"}
        inputType={"date"}
        inputName={"username"}
        inputId={"username"}
      />

      <article>
        <button>Register</button>
        <button>Cancel</button>
      </article>
    </form>
  );
};

export default RegisterForm;
