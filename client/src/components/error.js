import React from 'react';
import { Alert } from '@material-ui/lab';
import { Snackbar } from '@material-ui/core';

function AlertNote(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

const Error = ({ open, handleClose, errorMessage }) => {
  return (
    <Snackbar open={open} onClose={handleClose}>
      <AlertNote onClose={handleClose} severity="error">
        {errorMessage}
      </AlertNote>
    </Snackbar>
  );
};

export default Error;
