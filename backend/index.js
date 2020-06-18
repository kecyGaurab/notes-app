const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static('build'));

const notes = [
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

app.get('/notes', (req, res) => {
  res.send('Hello world');
});

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
