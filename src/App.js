import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import base from './base'
import SignIn from './SignIn'
import Main from './Main'

const PrivateRoute = ({component: Component, render, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed
        ? (render && render()) || <Component {...props} />
        : <Redirect to={{pathname: '/sign-in', state: {from: props.location}}} />}
    />
  )
}

const PublicRoute = ({component: Component, render, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => !authed
        ? (render && render()) || <Component {...props} />
        : <Redirect to='/notes' />}
    />
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  componentWillMount() {
    base.onAuth((user) => {
      if (user) {
        this.authHandler(null, { user });
      }
    })
  }

  authHandler = (err, authData) => {
    if (err) {
      console.error(err);
      return;
    }
    this.setState({
      user: authData.user,
    })
  }

  authed = () => {
    return !!this.state.user
  }

  signOut = () => {
    base.unauth()
    this.setState({ user: null })
  }

  render() {
    return (
      <div className="App container wrap">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/notes" />} />
            <PrivateRoute path="/notes" authed={this.authed()} render={() => (
              <Main signOut={this.signOut} />
            )} />
            <PublicRoute path="/sign-in" authed={this.authed()} render={() => (
              <SignIn authHandler={this.authHandler} />
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
