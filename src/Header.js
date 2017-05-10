import React from 'react'

const Header = ({ signOut }) => {
  return (
    <div className="row">
      <div className="col-xs-12">
        <header>
          <div className="well">
            Futurenote
            <div className="user-links">
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header