import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Happening now</h1>
                <h2>Join Twitter today.</h2>
                <ul>
                    <li><Link to="/users/login">Sign in</Link></li>
                    <li><Link to="/users/register">Sign up</Link></li>
                </ul>
            </div>
        );
    }
}