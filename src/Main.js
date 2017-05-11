import React from 'react'

import Header from './Header'

const Main = ({ signOut }) => {
  return (
    <div className="container">
      <Header authed={true} signOut={signOut} />
      <h2>Main</h2>
    </div>
  )
}

export default Main