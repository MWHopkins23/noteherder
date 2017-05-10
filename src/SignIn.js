import React from 'react'

import base from './base'

const SignIn = ({ authHandler }) => {
  const authenticate = (provider) => {
    base.authWithOAuthPopup(provider, authHandler)
  }

  return (
    <div className="SignIn container">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-4">
          <h3>Welcome!</h3>
          <div id="auth-form">
            <button className="github btn btn-default" onClick={() => authenticate('github')}>
              <i className="fa fa-github"></i>
              {' '}
              Sign In With GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn