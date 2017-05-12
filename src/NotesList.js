import React from 'react'
import { NavLink } from 'react-router-dom'

import './NotesList.css'

const Note = ({ note }) => {
  return (
    <NavLink to={`/notes/${note.id}`}>
      <li>
        <div className="note">
          <div className="note-title">{note.title}</div>
          <div className="note-body">{note.body}</div>
        </div>
      </li>
    </NavLink>
  )
}

const NotesList = (props) => {
  return (
    <div className="NotesList">
      <h3>Notes</h3>
      <ul id="notes">
        {
          Object
            .keys(props.notes)
            .map(key => <Note note={props.notes[key]} key={key} />)
        }
      </ul>
    </div>
  )
}

export default NotesList