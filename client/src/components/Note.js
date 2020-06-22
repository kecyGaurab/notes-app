import React from 'react';
import { Button, Typography, Grid, Paper } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import ClearSharpIcon from '@material-ui/icons/ClearSharp';

const Note = (props) => {
  const { note, handleRemove, handleStatus } = props;
  return (
    <Grid container alignItems="center" direction="row" spacing={2} justify="center">
      <Grid item xs={3}>
        <Paper elevation={0}>
          <Typography variant="h6">{note.content}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        {note.done ? (
          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<DoneOutlineIcon />}
            onClick={handleStatus}
          >
            Done
          </Button>
        ) : (
          <Button
            size="small"
            variant="contained"
            color="secondary"
            startIcon={<ClearSharpIcon />}
            onClick={handleStatus}
          >
            Not done
          </Button>
        )}
        <Button
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={handleRemove}
        >
          remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default Note;
