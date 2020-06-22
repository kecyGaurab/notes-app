import React from 'react';
import { Button } from '@material-ui/core';

const Note = (props) => {
  const { note, handleRemove, handleStatus } = props;
  return (
    <div>
      <span>{note.content}</span>
      {/* {note.done ? <span style={{ margin: '5px' }}>done</span> : null} */}
      <Button style={{ marginLeft: '15px' }} type="button" onClick={handleStatus}>
        {note.done ? 'not done' : 'mark as done'}
      </Button>
      <Button style={{ marginLeft: '15px' }} type="button" onClick={handleRemove}>
        remove
      </Button>
    </div>
  );
};

export default Note;
