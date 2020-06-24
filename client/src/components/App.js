/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Button, Container, CssBaseline, Grid } from '@material-ui/core';
import AddNote from './AddNote';
import Note from './Note';

import noteService from '../services/notes';
import NavBar from './NavBar';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', done: false });
  const [query, setQuery] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((response) => {
      setNotes(response);
    });
  }, [notes]);

  useEffect(() => {
    const handleFilter = () => {
      const matchedNotes = notes.filter((n) =>
        n.title.toLowerCase().startsWith(query.toLowerCase()),
      );
      setFilteredNotes(matchedNotes);
    };
    handleFilter();
  }, [query, notes]);

  const handleChange = (event) => {
    setNewNote({
      ...newNote,
      [event.target.name]: event.target.value,
    });
  };

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await noteService.create(newNote);
      setNotes(notes.concat(response));
      setNewNote({ ...newNote, title: '', content: '' });
    } catch (error) {
      alert(error);
    }
    setDialogOpen(false);
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
      <CssBaseline />
      <NavBar query={query} handleQueryChange={handleQueryChange} />
      <Container>
        <Grid container justify="space-around" direction="row" spacing={5}>
          <Grid item xs={12} align="center">
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={() => setDialogOpen(true)}
            >
              Add New
            </Button>
            <AddNote
              handleDialog={handleDialog}
              dialogOpen={dialogOpen}
              handleSubmit={handleSubmit}
              newNote={newNote}
              handleChange={handleChange}
            />
          </Grid>
          {filteredNotes.length !== 0
            ? filteredNotes.map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  handleRemove={() => handleRemove(note.id)}
                  handleStatus={() => handleStatus(note.id)}
                />
              ))
            : notes.map((note) => (
                <Note
                  key={note.id}
                  note={note}
                  handleRemove={() => handleRemove(note.id)}
                  handleStatus={() => handleStatus(note.id)}
                />
              ))}
        </Grid>
      </Container>
    </>
  );
};

export default App;
