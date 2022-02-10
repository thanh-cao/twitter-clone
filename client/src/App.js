import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import LogIn from './LogIn';
import Register from './Register';
import AllTweets from './AllTweets';
import UserTweets from './UserTweets';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
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
