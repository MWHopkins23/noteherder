import React from 'react'
import { NavLink } from 'react-router-dom'
import { convertFromRaw } from 'draft-js'

import './NotesList.css'

const Note = ({ note }) => {
  let body
  if (note && note.editorState) {
    const contentState = convertFromRaw(JSON.parse(note.editorState))
    body = contentState.getPlainText()
  }
  return (
    <NavLink to={`/notes/${note.id}`}>
      <li>
        <div className="note">
          <div className="note-title">{note.title}</div>
          <div className="note-body">{body}</div>
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