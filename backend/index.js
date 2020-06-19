/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-const-assign */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const Note = require('./models/note');

app.use(cors());

app.use(express.json());

// creating custom token
morgan.token('reqSent', (req) => {
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :reqSent'));

app.use(express.static('build'));

app.get('/api/notes/:id', async (request, response, next) => {
  try {
    const note = await Note.findById(request.params.id);
    if (note) {
      response.json(note.toJSON());
    } else {
      response.status(404).end();
    }
  } catch (error) {
    next(error);
  }
});

app.get('/api/notes', async (request, response, next) => {
  try {
    const data = await Note.find({});
    response.json(data.map((note) => note.toJSON()));
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line consistent-return
app.post('/api/notes', async (request, response, next) => {
  const { body } = request;
  const note = new Note({
    content: body.content,
    done: body.done || false,
    date: new Date(),
  });
  try {
    const savedNote = await note.save();
    response.json(savedNote.toJSON());
  } catch (error) {
    next(error);
  }
});

app.delete('/api/notes/:id', async (req, res, next) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

app.put('/api/notes/:id', async (request, response, next) => {
  const { body } = request;

  const note = {
    content: body.content,
    done: body.done,
  };

  try {
    const updatedNote = await Note.findByIdAndUpdate(request.params.id, note, { new: true });
    response.json(updatedNote);
  } catch (error) {
    next(error);
  }
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' });
  }

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
