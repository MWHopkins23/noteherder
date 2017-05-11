import React from 'react'

import './Main.css'
import NotesList from './NotesList'

const UserLinks = ({ signOut }) => (
  <div className="UserLinks">
    <button onClick={signOut}>
      <i className="fa fa-sign-out"></i>
    </button>
  </div>
)

const Nav = ({ signOut }) => {
  return (
    <nav className="Nav">
      <div className="logo">N</div>
      <button className="new-note"><span>+</span></button>
      <UserLinks signOut={signOut} />
    </nav>
  )
}

const Main = ({ signOut }) => {
  return (
    <main className="Main">
      <Nav signOut={signOut} />
      <NotesList />
      <div>
        <h2>Main</h2>
      </div>
    </main>
  )
}

export default Main