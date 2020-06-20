/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import AddNote from './AddNote';
import Note from './Note';
import noteService from '../services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ content: '', done: false });

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response);
    });
  }, []);

  const handleNoteChange = (event) => {
    event.preventDefault();
    setNewNote({ ...newNote, content: event.target.value });
  };

  console.log('notes', notes);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await noteService.create(newNote);
      setNotes(notes.concat(response));
      setNewNote({ ...newNote, content: '' });
    } catch (error) {
      alert(error);
    }
  };

  const handleRemove = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    // eslint-disable-next-line no-alert
    if (window.confirm(`Are you sure you want to delete the note ?`)) {
      try {
        await noteService.remove(id);
        setNotes(newNotes);
      } catch (error) {
        alert(error);
      }
    }
  };

  const handleStatus = async (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, done: !note.done };

    try {
      const response = await noteService.update(id, changedNote);
      setNotes(notes.map((n) => (n.id !== id ? n : response)));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="App">
      <div style={{ padding: '10px' }}>
        <h1>Note App</h1>
        <AddNote
          handleSubmit={handleSubmit}
          newNote={newNote}
          handleNoteChange={handleNoteChange}
        />
      </div>
      <div style={{ padding: '10px' }}>
        {notes
          ? notes.map((note) => (
              // eslint-disable-next-line react/jsx-indent
              <Note
                key={note.id}
                note={note}
                handleRemove={() => handleRemove(note.id)}
                handleStatus={() => handleStatus(note.id)}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default App;