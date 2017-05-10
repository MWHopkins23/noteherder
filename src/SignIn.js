import React from 'react'

const SignIn = () => {
  return (
    <div className="SignIn container">
      <div className="row">
        <div className="col-xs-6 col-xs-offset-4">
          <h3>Welcome!</h3>
          <div id="auth-form">
            <button className="github btn btn-default" onClick={() => this.authenticate('github')}>
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