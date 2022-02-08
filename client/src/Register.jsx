import React, { Component } from 'react';

export default class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                    <button>Register</button>
                </form>
            </div>
        );
    }
}