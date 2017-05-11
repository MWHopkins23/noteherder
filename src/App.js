import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import base from './base'
import SignIn from './SignIn'
import Main from './Main'
import { PublicRoute, PrivateRoute } from './RouteHelpers'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    this.getUserFromLocalStorage()
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, { user });
      } else {
        this.signOut()
      }
    })
  }

  getUserFromLocalStorage = () => {
    const user = localStorage.getItem('user')
    if (!user) return
    this.setState({ user: JSON.parse(user) })
  }

  authHandler = (err, authData) => {
    if (err) {
      console.error(err);
      return;
    }
    this.setState({
      user: authData.user,
    })
    localStorage.setItem('user', JSON.stringify(authData.user))
  }

  authed = () => {
    return !!this.state.user
  }

  signOut = () => {
    base.unauth()
    this.setState({ user: null })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App container wrap">
        <Router>
          <Switch>
            <PrivateRoute path="/notes" authed={this.authed()} render={() => (
              <Main signOut={this.signOut} />
            )} />
            <PublicRoute path="/sign-in" authed={this.authed()} render={() => (
              <SignIn authHandler={this.authHandler} />
            )} />
            <Route render={() => <Redirect to="/notes" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
