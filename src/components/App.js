/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddNote from './AddNote';
import Note from './Note';
import noteService from '../services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ content: '', done: false });

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response.data);
    });
  }, []);

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNewNote({ ...newNote, content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    noteService
      .create(newNote)
      .then((res) => {
        setNotes(notes.concat(res.data));
        setNewNote({ ...newNote, content: '' });
      })
      .catch((error) => alert(error));
  };

  const handleRemove = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    // eslint-disable-next-line no-alert
    if (window.confirm(`Are you sure you want to delete the note ?`)) {
      noteService
        .remove(id)
        .then(() => {
          setNotes(newNotes);
        })
        .catch((error) => alert(error));
    }
  };

  const handleStatus = (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, done: !note.done };
    noteService
      .update(id, changedNote)
      .then((res) => {
        setNotes(notes.map((no) => (no.id !== id ? no : res.data)));
      })
      .catch(() => alert('The note has already been removed'));
  };

  return (
    <div className="App">
      <h1>Note App</h1>
      <AddNote handleSubmit={handleSubmit} newNote={newNote} handleNoteChange={handleNoteChange} />
      {notes
        ? notes.map((note, index) => (
            // eslint-disable-next-line react/jsx-indent
            <Note
              key={index}
              note={note}
              handleRemove={() => handleRemove(note.id)}
              handleStatus={() => handleStatus(note.id)}
            />
          ))
        : null}
    </div>
  );
};

export default App;
