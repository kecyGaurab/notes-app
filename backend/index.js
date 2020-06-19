/* eslint-disable no-console */
/* eslint-disable no-const-assign */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const Note = require('./models/note');

app.use(cors());

app.use(bodyParser.json());

app.use(express.static('build'));

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method);
  console.log('Path:  ', request.path);
  console.log('Body:  ', request.body);
  console.log('---');
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(requestLogger);

let notes = [
  {
    content: 'eat',
    done: false,
    id: 6,
  },
  {
    content: 'make food',
    done: false,
    id: 7,
  },
  {
    content: 'fer',
    done: true,
    id: 8,
  },
  {
    content: 'hello',
    done: false,
    id: 9,
  },
];

app.get('api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((n) => n.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

app.get('/api/notes', (request, response) => {
  Note.find({}).then((data) => {
    response.json(data.map((note) => note.toJSON()));
  });
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

// eslint-disable-next-line consistent-return
app.post('/api/notes', (request, response) => {
  const { body } = request;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    });
  }

  const note = {
    content: body.content,
    done: body.done || false,
    id: generateId(),
  };

  notes = notes.concat(note);
  response.json(note);
});

app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((n) => n.id !== id);
  response.status(204).end();
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
