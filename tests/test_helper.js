const Note = require('../models/note');

const initialNotes = [
  {
    content: 'Do laundry',
    done: false,
  },
  {
    content: 'Make Dinner',
    done: true,
  },
];

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

module.exports = {
  initialNotes,
  notesInDb,
};
