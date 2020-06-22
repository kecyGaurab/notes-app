import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NoteSharpIcon from '@material-ui/icons/NoteSharp';

const NavBar = () => (
  <>
    <AppBar color="primary" position="static">
      <Toolbar>
        <IconButton edge="start" aria-label="menu">
          <NoteSharpIcon />
        </IconButton>

        <Typography variant="h3" color="primary">
          Notes
        </Typography>
      </Toolbar>
    </AppBar>
  </>
);
export default NavBar;
