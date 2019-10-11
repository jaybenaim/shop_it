import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <form onSubmit={e => this.props.handleLogin(e, this.state)}>
        <h4>Log In</h4>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default Login;
