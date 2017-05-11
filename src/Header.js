import React from 'react'

const UserLinks = ({ authed, signOut }) => (
  <div className="user-links">
    <button onClick={signOut}>
      <i className="fa fa-sign-out"></i>
    </button>
  </div>
)

const Header = ({ authed, signOut }) => {
  const userLinks = authed ? <UserLinks signOut={signOut} /> : ''
  return (

        <header>
          <span className="title">Noteherder</span>
          { userLinks }
        </header>

  )
}

export default Header