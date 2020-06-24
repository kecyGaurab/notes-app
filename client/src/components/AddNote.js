import React from 'react';
import { Container, Dialog, Button, DialogContent, DialogActions } from '@material-ui/core';
import Form from './form';

const AddNote = (props) => {
  const { handleSubmit, handleChange, dialogOpen, newNote, handleDialog } = props;
  return (
    <Container>
      <Dialog open={dialogOpen} disablePortal disableEnforceFocus>
        <DialogActions>
          <Button variant="contained" onClick={handleDialog}>
            Close
          </Button>
        </DialogActions>
        <DialogContent>
          <Form handleSubmit={handleSubmit} handleChange={handleChange} newNote={newNote} />
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AddNote;
