import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CreateTweet extends Component {
    constructor(props) {
        super(props);
        this.state = {
        message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        this.setState({
            message: event.target.value
        });
    }
    

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.avatar} alt="avatar" width="50"/>
                </div>
                <form onSubmit={this.props.addTweet}>
                    <textarea id="message" value={this.state.message} onChange={this.handleChange} placeholder="What's happening?"></textarea>
                    <button>Tweet</button>
                </form>
            </div>
        );
    }
}