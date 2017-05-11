import React, { Component } from 'react'

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: this.blankNote()
    }
  }

  componentWillReceiveProps(nextProps) {
    let note
    if (nextProps.match.params.id) {
      console.log('found it', nextProps.match.params.id)
      console.log(nextProps.notes)
      note = nextProps.notes[nextProps.match.params.id]
      console.log({ note })
    }
    this.setState({ note: note || this.blankNote() })
    console.log(nextProps.match)
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
    this.setState({ note }, () => this.props.saveNote(this.state.note))
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
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={note.body}
            ></textarea>
          </p>
        </form>
      </div>
    )
  }
}

export default NoteForm