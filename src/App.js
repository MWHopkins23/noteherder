import React, { Component } from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import base from './base'
import SignIn from './SignIn'
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="container wrap">
        <Header />
        <SignIn />
      </div>
    );
  }
}

export default App;
