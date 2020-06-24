/* eslint-disable max-len */
import React from 'react';
import { TextField, Grid, Typography, Button, Card, CardContent } from '@material-ui/core';

const Form = ({ handleSubmit, handleChange, newNote }) => {
  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={4}>
            <Grid item xs={12} align="center">
              <Typography variant="h6">New Note</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={handleChange}
                variant="outlined"
                type="text"
                label="title"
                name="title"
                value={newNote.title || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                onChange={handleChange}
                variant="outlined"
                type="text"
                label="content"
                name="content"
                multiline
                rows={3}
                value={newNote.content || ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                disabled={newNote.title.length < 1 || newNote.content.length < 1}
                color="primary"
                type="submit"
                variant="outlined"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default Form;
