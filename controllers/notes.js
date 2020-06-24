const express = require('express');

const notesRouter = express.Router();
const Note = require('../models/note');

notesRouter.get('/:id', async (request, response, next) => {
  try {
    const note = await Note.findById(request.params.id);
    if (note) {
      response.json(note.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (exception) {
    next(exception);
  }
});

notesRouter.get('/', async (request, response) => {
  const notes = await Note.find({});
  response.json(notes.map((note) => note.toJSON()));
});

// eslint-disable-next-line consistent-return
notesRouter.post('/', async (request, response, next) => {
  const { body } = request;
  const note = new Note({
    title: body.title,
    content: body.content,
    date: new Date(),
  });
  try {
    const savedNote = await note.save();
    response.json(savedNote.toJSON());
  } catch (exception) {
    next(exception);
  }
});

notesRouter.delete('/:id', async (req, res, next) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

notesRouter.put('/:id', async (request, response, next) => {
  const { body } = request;

  const note = {
    done: body.title,
    content: body.content,
  };

  try {
    const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, { new: true });
    response.json(updatedNote);
  } catch (error) {
    next(error);
  }
});
module.exports = notesRouter;
