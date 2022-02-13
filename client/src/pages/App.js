import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Register from './Register';
import AllTweets from './AllTweets';
import UserTweets from './UserTweets';
import Sidenav from '../components/Sidenav';
const { authenticateUser, logout } = require('../services/auth');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthenticated: false
    };
  }

  async componentDidMount() {
    try {
      const user = await authenticateUser();
      if (!user.error) {
        this.setState({
          user: user,
          isAuthenticated: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loggingOut() {
    console.log('logging out');
    await logout();
    console.log('logged out');
    this.setState({
      user: null,
      isAuthenticated: false
    });
    this.props.history.push('/users/login');
  }

  render() {
    return (
      <div className="bg-black text-white">
        <BrowserRouter>
        {this.state.isAuthenticated && <Sidenav username={this.state.user.username} handleLogOut={this.loggingOut.bind(this)}/>}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users/login" component={LogIn} />
            <Route path="/users/register" component={Register} />
            <Route path="/tweets/:username" component={UserTweets} />
            <Route path="/tweets" component={AllTweets} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
