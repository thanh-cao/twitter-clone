import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';
import CreateTweet from './CreateTweet';
const calculateTime = require('./services/calculateTime');
export default class AllTweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
        this.addTweet = this.addTweet.bind(this);
    }

    async addTweet(event) {
        event.preventDefault();
        const message = event.target.message.value;
        const response = await fetch('http://localhost:3005/tweets/create', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });
        await response.json();
        await this.populateTweets();
    }

    async populateTweets() {
        const response = await fetch('http://localhost:3005/tweets', {
            credentials: 'include'
        });
        const tweets = await response.json();
        this.setState({ tweets });
    }

    async componentDidMount() {
        await this.populateTweets();
    }

    render() {
        return (
            <div>
                <Link to="/tweets">
                    <h1>Home</h1>
                </Link>

                <CreateTweet
                    avatar="https://via.placeholder.com/150"
                    addTweet={this.addTweet}
                />

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