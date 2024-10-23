import React, { useState } from "react";
import InputTextElement from "./InputTextElement";
import Button from "./Button";

const RegisterForm = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    dob: ""
  })

  const handleUserRegistration = () => {
    localStorage.setItem("userInfo", userInfo)
  }

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

      <article className=" w-75 d-flex justify-content-evenly">
        <Button title="Register" bsStyles={"btn btn-primary"} />
        <Button title="Cancel" bsStyles={"btn btn-danger"} />
      </article>
    </form>
  );
};

export default RegisterForm;
