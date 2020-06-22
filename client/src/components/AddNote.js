import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

const AddNote = (props) => {
  const { handleNoteChange, handleSubmit, newNote } = props;
  return (
    <Grid>
      <form onSubmit={handleSubmit}>
        <TextField variant="outlined" value={newNote.content || ''} onChange={handleNoteChange} />
        <Button disabled={newNote.content.length < 1} type="submit">
          Add
        </Button>
      </form>
    </Grid>
  );
};

export default AddNote;
