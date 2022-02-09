import React, { Component } from 'react';

export default class AllTweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: []
        };
    }

    async componentDidMount() {
        const response = await fetch('http://localhost:3005/tweets');
        const tweets = await response.json();
        this.setState({ tweets });
    }

    render() {
        return (
            <div>
                <h1>All Tweets</h1>
                {this.state.tweets.map(tweet => (
                    <div key={tweet.id}>
                        <h2>{tweet.userId}</h2>
                        <p>{tweet.message}</p>
                        <p>{tweet.createdAt}</p>
                    </div>
                ))}
            </div>
        );
    }
}