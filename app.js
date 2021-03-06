const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const notesRouter = require('./controllers/notes');
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const logger = require('./utils/logger');

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

app.use(express.json());
app.use(middleware.requestLogger);

app.use('/api/notes', notesRouter);
app.use(express.static('build'));

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
