/* eslint-disable prefer-const */
require('dotenv').config();

let PORT = process.env.PORT || 3001;
let { MONGODB_URI } = process.env;

if (process.env.NODE_ENV === 'test') {
  MONGODB_URI = process.env.TEST_MONGODB_URI;
}

module.exports = {
  MONGODB_URI,
  PORT,
};
