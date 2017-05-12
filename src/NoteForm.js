import React, { Component } from 'react'
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import Editor from 'draft-js-editor'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
    }
  }

  componentWillReceiveProps(nextProps) {
    let note
    if (nextProps.match.params.id) {
      note = nextProps.notes[nextProps.match.params.id]
      if (note && note.editorState) {
        note.editorState = EditorState.createWithContent(convertFromRaw(JSON.parse(note.editorState)))
      }
    }
    this.setState({ note: note || this.blankNote() })
  }
  
  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
      editorState: EditorState.createEmpty()
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState({ note }, () => this.props.saveNote(this.state.note))
  }

  handleEditorChanges = (editorState) => {
    const note = {...this.state.note}
    note.editorState = editorState
    this.setState({ note })
    note.editorState = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    this.props.saveNote(note)
    // const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()))
    // const note = {...this.state.note}
    // note.body = editorState.getCurrentContent().getPlainText()
    // this.setState({ note }, () => this.props.saveNote(this.state.note))
  }

  render() {
    const note = this.state.note
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button" onClick={() => this.props.removeNote(this.state.note)}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <Editor
            name="body"
            placeholder="Just start typing..."
            value={note.body}
            editorState={this.state.note.editorState}
            onChange={this.handleEditorChanges}
          />
        </form>
      </div>
    )
  }
}

export default NoteForm