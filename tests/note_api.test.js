const supertest = require('supertest');
const mongoose = require('mongoose');
const helper = require('./test_helper');

const app = require('../app');

const api = supertest(app);

const Note = require('../models/note');

beforeEach(async () => {
  await Note.deleteMany({});

  let noteObject = new Note(helper.initialNotes[0]);
  await noteObject.save();

  noteObject = new Note(helper.initialNotes[1]);
  await noteObject.save();
});

test('notes are returned as json', async () => {
  await api
    .get('/api/notes')
    .expect(200)
    .expect('Content-Type', /application\/json/);
});

test('all notes are returned', async () => {
  const response = await api.get('/api/notes');
  expect(response.body.length).toBe(helper.initialNotes.length);
});

test('one note is returned', async () => {
  const response = await api.get('/api/notes');

  const contents = response.body.map((res) => res.content);
  expect(contents).toContain('Make Dinner');
});

test('a new note can be added', async () => {
  const newNote = {
    content: 'do assignment',
    done: 'false',
  };
  await api
    .post('/api/notes')
    .send(newNote)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const totalNotes = await helper.notesInDb();
  expect(totalNotes.length).toBe(helper.initialNotes.length + 1);

  const contents = totalNotes.map((t) => t.content);
  expect(contents).toContain('do assignment');
});

test('a specific note can be deleted', async () => {
  const noteStart = await helper.notesInDb();

  const noteToDelete = noteStart[0];

  await api.delete(`/api/notes/${noteToDelete.id}`).expect(204);

  const notesAtEnd = await helper.notesInDb();

  expect(notesAtEnd.length).toBe(helper.initialNotes.length - 1);
});

test('a specific note can be viewed', async () => {
  const notesAtStart = await helper.notesInDb();

  const noteToView = notesAtStart[0];

  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect('Content-Type', /application\/json/);
  expect(resultNote.body).toEqual(noteToView);
});

afterAll(() => {
  mongoose.connection.close();
});
