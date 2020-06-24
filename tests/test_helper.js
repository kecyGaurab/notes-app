/* eslint-disable max-len */
const Note = require('../models/note');

const initialNotes = [
  {
    title: 'Maldives to reopen to tourists',
    content:
      'The Maldives will reopen tourist resorts from 15 July, its President Ibrahim Solih has said - adding that international tourists would be welcomed. Foreign visitors will not need to undergo virus tests to enter the country.',
  },
  {
    title: 'REDKNAPP: NOT A FAN OF SPURS MIDFIELD',
    content:
      'Im not a big fan of that Spurs midfield, if Im honest. You need to keep the ball, and I dont think they are great on the ball. I look at West Hams midfield',
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
