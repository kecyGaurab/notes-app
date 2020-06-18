/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import AddNote from './AddNote';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ content: '', done: false });

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNewNote({ ...newNote, content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes(notes.concat(newNote));
    setNewNote({ ...newNote, content: '' });
  };

  const handleRemove = (id) => {
    const newNotes = notes.filter((note) => note !== id);
    setNotes(newNotes);
  };

  const handleStatus = (id) => {
    const note = notes.find((n) => n === id);
    const changedNote = { ...note, done: !note.done };
    const filteredNote = notes.filter((n) => n !== note);
    setNotes(filteredNote.concat(changedNote));
  };


  return (
    <div className="App">
      <h1>Note App</h1>
      <AddNote handleSubmit={handleSubmit} newNote={newNote} handleNoteChange={handleNoteChange} />
      {notes
        ? notes.map((note, index) => (
            // eslint-disable-next-line react/jsx-indent
            <Note key={index} note={note} handleRemove={handleRemove} handleStatus={handleStatus} />
          ))
        : null}
    </div>
  );
};

export default App;
