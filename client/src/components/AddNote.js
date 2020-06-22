import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

const AddNote = (props) => {
  const { handleNoteChange, handleSubmit, newNote } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Grid container justify="center">
        <Grid item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            value={newNote.content || ''}
            onChange={handleNoteChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button size="large" variant="text" disabled={newNote.content.length < 1} type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNote;
