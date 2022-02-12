import React, { Component } from 'react';
import './Form.css';



export default class Form extends Component {
    render() {
        return (
            <form className="Form text-black">
                <div className="mt-8">
                    <div className="grid grid-cols-1 gap-6">
                        {this.props.children}
                    </div>
                </div>
                <div className="mt-6">
                    <button
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-small rounded-full text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                        type="submit"
                        onClick={this.props.onClick}
                    >
                        {this.props.buttonText}
                    </button>
                </div>
            </form>
        );
    }
}