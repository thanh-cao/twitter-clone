import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tweet from '../components/Tweet';
import CreateTweet from '../components/CreateTweet';
const calculateTime = require('../services/calculateTime');
const { getAllTweets, createTweet } = require('../services/tweets');
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
        await createTweet(message);
        await this.populateTweets();
    }

    async populateTweets() {
        const tweets = await getAllTweets();
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