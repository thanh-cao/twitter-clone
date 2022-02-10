import React, { Component } from 'react';
import Tweet from '../components/Tweet';
import { Link } from 'react-router-dom';
const calculateTime = require('../services/calculateTime');

export default class UserTweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }

    async getUser(username) {
        try {
            const response = await fetch(`http://localhost:3005/users/${username}`, {
                credentials: 'include'
            });
            const user = await response.json();
            this.setState({ user });
        } catch (error) {
            console.log(error);
        }
    }

    async getTweets(username) {
        try {
            const response = await fetch(`http://localhost:3005/tweets/`, {
                credentials: 'include'
            });
            let tweets = await response.json();
            tweets = tweets.filter(tweet => tweet.User.username === username);
            this.setState({ tweets });
        } catch (error) {
            console.log(error);
        }
    }


    async componentDidMount() {
        const username = this.props.match.params.username;
        await this.getTweets(username);
    }

    render() {
        return (
            <div>
                <h1>UserTweets</h1>

                {this.state.tweets.map(tweet => (
                    <Tweet
                        key={tweet.id}
                        name={tweet.User.name}
                        username={tweet.User.username}
                        avatar="https://via.placeholder.com/150"
                        message={tweet.message}
                        createdAt={calculateTime(tweet.createdAt)}
                    />
                ))}
            </div>
        );
    }
}   