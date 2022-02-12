import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/Form';
import FormInput from '../components/FormInput';
const { register, authenticateUser } = require('../services/auth');

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            password: ''
        };
        this.name = React.createRef();
        this.username = React.createRef();
        this.password = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        try {
            const { name, username, password } = this.state;
            const res = await register(name, username, password);
            if (res.error) {
                throw new Error(res.error);
            }
            this.props.history.push('/tweets');
        } catch (error) {
            console.log(error);
        }
    }

    async componentDidMount() {
        try {
            const user = await authenticateUser();
            if (!user.error) {
                this.props.history.push('/tweets');
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const dayRange = (() => {
            const days = [];
            for (let i = 1; i <= 31; i++) {
                days.push(i);
            }
            return days;
        })();
        const monthRange = (() => {
            const months = [];
            for (let i = 1; i <= 12; i++) {
                months.push(i);
            }
            return months;
        })();
        const yearRange = (() => {
            const years = [];
            for (let i = 1950; i <= 2010; i++) {
                years.push(i);
            }
            return years;
        })();

        return (
            <div className="bg-slate-800 h-screen flex justify-center items-center">
                <div className="w-4/6 max-w-screen-sm">
                    <div className="bg-black text-white flex flex-col rounded-2xl pt-5 px-16 pb-16">
                        <div className="w-10 mx-auto mb-5">
                            <svg viewBox="0 0 24 24" aria-label="Twitter"><g><path fill="white" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></g></svg>
                        </div>

                        <h1 className="text-2xl font-bold">Sign up to Twitter</h1>

                        <Form
                            onClick={this.handleSubmit}
                            buttonText="Register">
                            <FormInput name="name" label="Name" type="text" onChange={this.handleChange} />
                            <FormInput name="username" label="Username" type="text" onChange={this.handleChange} />
                            <FormInput name="password" label="Password" type="password" onChange={this.handleChange} />
                            <div className="grid grid-cols-3 gap-x-2">
                                <FormInput name="day" label="Day" options={dayRange} onChange={this.handleChange} />
                                <FormInput name="month" label="Month" options={monthRange} onChange={this.handleChange} />
                                <FormInput name="year" label="Year" options={yearRange} onChange={this.handleChange} />
                            </div>
                        </Form>

                        <div className="mt-5">
                            <p>Don't have an account? <Link className="text-blue-600" to="/users/register">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}