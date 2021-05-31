import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import hero from "../../assets/hero.jpg";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { createHashHistory } from "history";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const AddPaper = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [_error, errRes] = useState("");
  const [isAuthenticated, setAuth] = useState(false);
  const [error, setError] = useState();
  const history = createHashHistory();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    if (!email || !password) {
      errRes("Please fill in all the fields!");
    } else {
      const reg_URL = "http://127.0.0.1:8000/auth/login";
      await axios
        .post(reg_URL, data)
        .then((response) => {
          const login_result = response;
          localStorage.setItem("token", login_result.data.tokens);
          localStorage.setItem("email", login_result.data.email);
          localStorage.setItem("tokenType", "Bearer");
          setAuth(true);
          console.log(login_result.data);
          history.push("/");
        })
        .catch((error) => {
          setError(error.response.data);
          console.log(error.response.data);
          if (error.response.data) {
            errRes("Invalid login details!");
          }
        })
        .then(() => {
          // always executed
        });
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <Redirect to="/home" />
      ) : (
        <form id="add-form" onSubmit={handleSubmit}>
          <img className="pull-right" src={hero} alt="" />
          <h2>Welcome</h2>
          <p>Log In to Your Account</p>
          <p className="error">{_error}</p>
          <div id="add-form-group">
            <input
              type="email"
              id="add-form-control"
              placeholder="Enter email"
              onChange={handleEmail}
            />
          </div>
          <div id="add-form-group">
            <input
              type="password"
              id="add-form-control"
              placeholder="Enter password"
              onChange={handlePassword}
            />
          </div>
          <button className="btn btn-primary" id="add-btn" type="submit">
            Login
          </button>
          <div class="or"> OR </div>
          <a href="#" id="add-btn-google">
            <FcGoogle id="google-icon" />
            Continue with google
          </a>
        </form>
      )}
    </div>
  );
};

export default AddPaper;
