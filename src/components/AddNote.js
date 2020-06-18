/* eslint-disable no-console */
import React from 'react';

const AddNote = (props) => {
  const { handleNoteChange, handleSubmit, newNote } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newNote.content || ''} onChange={handleNoteChange} />
        <button disabled={newNote.content.length < 1} type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNote;
