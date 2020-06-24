import React from 'react';
import { IconButton, Typography, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const Header = ({ note, handleRemove }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={10}>
        <Typography variant="h6">{note.title}</Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton onClick={() => handleRemove(note)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default Header;
