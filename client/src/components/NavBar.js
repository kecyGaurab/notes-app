import React from 'react';
import { AppBar, Grid, Typography, Toolbar } from '@material-ui/core';
import Search from './search';

const NavBar = ({ handleQueryChange, query }) => (
  <>
    <AppBar color="primary" position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item xs={3} align="right">
            <Typography variant="h3" color="primary">
              Notes
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Search query={query} handleQueryChange={handleQueryChange} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </>
);
export default NavBar;
