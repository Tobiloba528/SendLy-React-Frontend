import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { Redirect } from 'react-router-dom';
import auth from "../services/authService";
import "./styles/login.css";
import Title from "./title";

class Login extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("Email"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  handleClick = () => {
    this.props.history.push("/register");
  };

  doSubmit = async () => {
    try {
      const { email, password } = this.state.data;
      await auth.login(email, password);

      const { state } = this.props.location;
      window.location =  state ? state.from.pathname :  "/profile";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(ex.response.data);
      }
    }
  };

  render() {
    if(auth.getCurrentUser()) return <Redirect to="/profile" />
    return (
      <form id="login-form" onSubmit={this.handleSubmit}>
        <Title title="Login" />
        <div id="inner-login">
          <h1>Login</h1>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={this.state.data.email}
              name="email"
              onChange={this.handleChange}
              autoFocus
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              Enter a valid Email Address
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={this.state.data.password}
              name="password"
              onChange={this.handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ display: "block" }}
          >
            Login
          </button>
          <div style={{ float: "right" }}>
            <p style={{ display: "inline" }}>Don't have an account? </p>
            <button className="btn btn-primary" onClick={this.handleClick}>
              Sign Up
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
