const config = require('./utils/config');
const express = require('express');
const app = express();
const cors = require('cors');
const notesRouter = require('./controllers/notes');
const middleware = require('./utils/middleware');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const path = require('path')

logger.info('connecting to', config.MONGODB_URI);
// mongoose.set('useCreateIndex', true)


mongoose
.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})
.then(() => {
  logger.info('connected to MongoDB');
})
.catch((error) => {
  logger.error('error connection to MongoDB:', error.message);
});

app.use(cors());
app.use(express.static('build'));

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/notes', notesRouter);

app.use((req, res) => {
	res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
