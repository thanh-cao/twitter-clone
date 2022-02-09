import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tweet from './Tweet';
import CreateTweet from './CreateTweet';
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
        console.log(message);
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
        const currentTimestamp = new Date().getTime() / 1000;

        const calculateTime = (createdAt) => {
            createdAt = Date.parse(createdAt) / 1000;
            const time = currentTimestamp - createdAt;

            switch (true) {
                case time < 60:
                    return `${time} seconds ago`;
                case time < 3600:
                    return `${Math.floor(time / 60)} minutes ago`;
                case (time < 86400):
                    return `${Math.floor(time / 3600)} hours ago`;
                case time < 604800:
                    return `${Math.floor(time / 86400)} days ago`;
                case time < 2592000:
                    return `${Math.floor(time / 604800)} weeks ago`;
                case time < 31536000:
                    return `${Math.floor(time / 2592000)} months ago`;
                default:
                    return `${Math.floor(time / 31536000)} years ago`;
            }
        };

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