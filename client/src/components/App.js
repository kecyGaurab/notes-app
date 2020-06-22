/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Card, Container, CssBaseline, Grid, Typography } from '@material-ui/core';
import AddNote from './AddNote';
import Note from './Note';
import noteService from '../services/notes';
import NavBar from './NavBar';

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
    <>
      <Container>
        <Card square>
          <CssBaseline />
          <Grid container direction="column" justify="center" spacing={2}>
            <Grid item>
              <NavBar />
            </Grid>
            <Grid item>
              <AddNote
                handleSubmit={handleSubmit}
                newNote={newNote}
                handleNoteChange={handleNoteChange}
              />
            </Grid>
            <Grid item>
              {notes
                ? notes.map((note) => (
                  <Note
                    key={note.id}
                    note={note}
                    handleRemove={() => handleRemove(note.id)}
                    handleStatus={() => handleStatus(note.id)}
                  />
                ))
                : null}
            </Grid>
          </Grid>
        </Card>
      </Container>
    </>
  );
};

export default App;
