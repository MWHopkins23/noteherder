import React, { Component } from 'react'
// import { EditorState, convertFromRaw, convertToRaw } from 'draft-js'
import RichTextEditor from 'react-rte'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote(),
      editorValue: RichTextEditor.createEmptyValue()
    }
  }

  componentWillReceiveProps(nextProps) {
    let note
    if (nextProps.match.params.id) {
      note = nextProps.notes[nextProps.match.params.id]
    }
    note = note || this.blankNote()
    this.setState({ 
      note,
      // editorValue: RichTextEditor.createValueFromString(note.body, 'html')
    })
  }
  
  blankNote = () => {
    return {
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState({ note }, () => this.props.saveNote(note))
  }

  handleEditorChanges = (editorValue) => {
    this.setState({ editorValue })
    const note = {...this.state.note}
    note.body = editorValue.toString('html')
    this.setState({ note })
    this.props.saveNote(note)
  }

  render() {
    const note = this.state.note
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button" onClick={() => this.props.removeNote(note)}>
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
              value={note.title}
            />
          </p>
          <RichTextEditor
            name="body"
            placeholder="Just start typing..."
            value={this.state.editorValue}
            onChange={this.handleEditorChanges}
          />
        </form>
      </div>
    )
  }
}

export default NoteForm