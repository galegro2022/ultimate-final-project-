const mongoose = require('mongoose');
require('dotenv').config();

// || 'mongodb://127.0.0.1:27017/tech-friends'

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
