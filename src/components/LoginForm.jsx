import React, { useState } from "react";
import InputTextElement from "./InputTextElement";
import Button from "./Button";

const LoginForm = () => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const handleSignIn = (_, e) => {
    e.preventDefault()
    console.log("userInput",userInput);    
    const userData = JSON.parse(localStorage.getItem("userData"))
    console.log("userData from Local Storage", userData);   
    
    const isUsernameMatching = userData.username === userInput.username
    const isPasswordMatching = userData.password === userInput.password
    
    if (isUsernameMatching && isPasswordMatching) {
      alert("Logged In Successfully!!")
      location.reload()
      localStorage.setItem("isUserLoggedIn", true)
    } else {
      alert("Invalid credentials...")
      location.reload()
      localStorage.setItem("isUserLoggedIn", false)
    }
  };

  return (
    <form className="d-flex w-100 flex-column justify-content-evenly align-items-center h-100">
      <InputTextElement
        htmlFor={"username"}
        labelValue={"Username :"}
        inputType={"text"}
        inputName={"username"}
        inputId={"username"}
        handler={setUserInput}
        data={userInput}
        field={"username"}
      />

      <InputTextElement
        htmlFor={"password"}
        labelValue={"Password :"}
        inputType={"password"}
        inputName={"password"}
        inputId={"password"}
        handler={setUserInput}
        data={userInput}
        field={"password"}
      />

      <article>
        <Button
          title="Sign In"
          bsStyles={"btn btn-primary"}
          handler={handleSignIn}
        />
      </article>
    </form>
  );
};

export default LoginForm;
