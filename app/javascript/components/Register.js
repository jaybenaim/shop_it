import React, { Component } from "react";
import Axios from "axios";
import Login from "./Login";
import Signup from "./Signup";
import Api from "../api/Api";

class Register extends Component {
  state = {
    loggedIn: localStorage.email ? true : false,
    username: localStorage.name || null,
    displayedForm: null
  };

  handleSignup = (e, data) => {
    e.preventDefault();
    Api.get("users/sign_up", {
      email: data.email,
      password: data.password
    }).then(res => {
      localStorage.name = data.name;
      localStorage.email = data.email;
      console.log(res.statusText);
    });
  };

  handleLogin = (e, data) => {
    e.preventDefault();
    console.log(data);
    Api.post("users/sign_in", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        localStorage.name = data.name;
        localStorage.email = data.email;
        console.log(res.statusText);
        console.log(localStorage);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleLogout = e => {
    e.preventDefault();
    localStorage.name = "";
    localStorage.email = "";

    this.setState({ loggedIn: false });
  };

  displayForm = form => {
    this.setState({
      displayedForm: form
    });
  };

  loggedOutNav = (
    <div className="center">
      <ul>
        <li
          className="btn btn-primary login-button"
          onClick={() => this.displayForm("login")}
        >
          Login
        </li>

        <li
          className="btn btn-primary signup-button"
          onClick={() => this.displayForm("signup")}
        >
          Signup
        </li>
      </ul>
    </div>
  );
  loggedInNav = (
    <button
      className="btn btn-primary logout-button"
      onClick={this.handleLogout}
    >
      Logout
    </button>
  );

  render() {
    let form;
    switch (this.state.displayedForm) {
      case "login":
        form = <Login handleLogin={this.handleLogin} />;
        break;
      case "signup":
        form = <Signup handleSignup={this.handleSignup} />;
        break;
      default:
        form = null;
    }
    return (
      <div className="container">
        {this.state.loggedIn ? this.loggedInNav : this.loggedOutNav}
        {form}
        <div className="login-welcome">
          {this.state.loggedIn
            ? `Hello, ${localStorage.name.slice(0, 1).toUpperCase() +
                localStorage.name.slice(1)}`
            : "Please Log In"}
        </div>
      </div>
    );
  }
}

export default Register;
