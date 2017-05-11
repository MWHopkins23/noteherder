import React from 'react'

import './NotesList.css'

const Note = () => {
  return (
    <li>
      <div className="note">
        <div className="note-title">This thing</div>
        <div className="note-body">sdkfjhs dfkh sdkf sdlfk dlk djfdfkgjh dgljdhf jdgf dfgkj </div>
      </div>
    </li>
  )
}

const NotesList = () => {
  return (
    <div className="NotesList">
      <h3>Notes</h3>
      <ul id="notes">
        {
          [0,1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1].map(_ => <Note />)
        }
      </ul>
    </div>
  )
}

export default NotesList