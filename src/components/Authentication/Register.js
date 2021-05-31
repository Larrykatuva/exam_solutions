import React, { useState, useEffect } from "react";
import hero from "../../assets/hero.jpg";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { createHashHistory } from "history";
import AddForm from '../Home/AddPaper';
import { BrowserRouter as Router, Redirect } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [error, setError] = useState();
  const [password, setPassword] = useState();
  const [_error, errRes] = useState("");
  const history = createHashHistory();
  const [isRegistered, setRegister] = useState(false);

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      username: username,
      email: email,
      password: password,
    };
    if (!username || !email || !password) {
      errRes("Please fill in all the fields!");
    } else {
      const reg_URL = "http://127.0.0.1:8000/auth/register";
      await axios
        .post(reg_URL, data)
        .then((response) => {
          const login_result = response;
          console.log(login_result.data);
          history.go("/login");
          setRegister(true)
        })
        .catch((error) => {
          setError(error.response.data);
          console.log(error.response.data);
          if (error.response.data) {
            errRes("Username or email already exist!");
          }
        })
        .then(() => {
          // always executed
        });
    }
  };

  return (
    <div>
      {isRegistered ? 
      <Redirect to="/login"/> :
      <form id="add-form" onSubmit={handleSubmit}>
        <img className="pull-right" src={hero} alt="" />
        <h2>Welcome</h2>
        <p>Register an Account</p>
        <p className="error">{_error}</p>
        <div id="add-form-group">
          <input
            type="text"
            id="add-form-control"
            placeholder="Enter name"
            onChange={handleUsername}
          />
        </div>
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
          Register
        </button>
        <div class="or"> OR </div>
        <a href="#" id="add-btn-google">
          <FcGoogle id="google-icon" />
          Signup with google
        </a>
      </form>
      }
    </div>
  );
};

export default Register;
