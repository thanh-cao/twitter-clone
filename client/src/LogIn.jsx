import React, { Component } from 'react';

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}