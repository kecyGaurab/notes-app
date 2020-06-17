import React from 'react';

const Note = (props) => {
  const { note, handleRemove } = props;
  return (
    <div>
      <span>{note}</span>
      <button style={{ marginLeft: '15px' }} type="button" onClick={() => handleRemove(note)}>
        remove
      </button>
    </div>
  );
};

export default Note;
