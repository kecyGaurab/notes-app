import React from 'react';

const Note = (props) => {
  const { note, handleRemove, handleStatus } = props;
  return (
    <div>
      <span>{note.content}</span>
      {/* {note.done ? <span style={{ margin: '5px' }}>done</span> : null} */}
      <button style={{ marginLeft: '15px' }} type="button" onClick={() => handleStatus(note)}>
        {note.done ? 'not done' : 'mark as done'}
      </button>
      <button style={{ marginLeft: '15px' }} type="button" onClick={() => handleRemove(note)}>
        remove
      </button>
    </div>
  );
};

export default Note;
