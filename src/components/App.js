/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import AddNote from './AddNote';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes(notes.concat(newNote));
    setNewNote('');
  };

  const handleRemove = (id) => {
    const newNotes = notes.filter((note) => note !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Note App</h1>
      <AddNote handleSubmit={handleSubmit} newNote={newNote} handleNoteChange={handleNoteChange} />
      {notes
        ? notes.map((note, index) => <Note key={index} note={note} handleRemove={handleRemove} />)
        : null}
    </div>
  );
};

export default App;
