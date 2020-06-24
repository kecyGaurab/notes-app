/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-alert */
import React from 'react';
import { CardContent, Grid, Typography, Divider } from '@material-ui/core';
import { StyledCard } from './styledComponents';
import Header from './header';

const Note = (props) => {
  const { note, handleRemove } = props;

  return (
    <StyledCard square elevation={5}>
      <CardContent>
        <Grid container direction="column" spacing={1}>
          <Grid item>
            <Header note={note} handleRemove={handleRemove} />
          </Grid>
          <Divider />
          <Grid item>
            <Typography variant="body1">{note.content}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
