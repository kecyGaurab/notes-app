/* eslint-disable no-console */
import React from 'react';

const AddNote = (props) => {
  const { handleNoteChange, handleSubmit, newNote } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNote;
