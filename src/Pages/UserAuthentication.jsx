import React, { useState } from "react";
import RegisterForm from "../components/registerForm";
import LoginForm from "../components/loginForm";
import InputTextElement from "../components/InputTextElement";

const UserAuthentication = () => {
  const [pageVariant, setPage] = useState(null);

  return (
    <>
      

      <section
        className=" d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <article
          className="mb-3 w-75 d-flex justify-content-evenly align-items-center bg-primary rounded"
          style={{ height: "7vh" }}
        >
          <button onClick={() => setPage("register")}>Register</button>
          <button onClick={() => setPage("login")}>Sign In</button>
        </article>

        <article
          className="bg-info w-75 rounded d-flex jsutify-content-center align-items-center "
          style={{ height: "25vh" }}
        >
          {pageVariant === "register" ? (
            <RegisterForm />
          ) : pageVariant === "login" ? (
            <LoginForm />
          ) : (
            <p className=" text-center w-100 fw-bold">Welcome to My App!</p>
          )}
        </article>
      </section>
    </>
  );
};

export default UserAuthentication;
