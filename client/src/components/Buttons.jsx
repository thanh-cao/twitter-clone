import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ('./Buttons.css');

export class PrimaryButton extends Component {
    render() {
        return (
            <div className="rounded-full shadow">
                <Link
                    className="btn-primary"
                    to={this.props.href}
                >
                    {this.props.text}
                </Link>
            </div>

        )
    }
}

export class SecondaryButton extends Component {
    render() {
        return (
            <div className="rounded-full shadow">
                <a
                    href={this.props.href}
                    className="btn-secondary"
                >
                    {this.props.text}
                </a>
            </div>
        )
    }
}
{/* <div className="mt-3 sm:mt-0 sm:ml-3"></div> */}