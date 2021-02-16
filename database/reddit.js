const mongoose = require('mongoose');

const { Schema } = mongoose;

// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

mongoose.Promise = global.Promise;

const RedditSchema = new Schema({
  title: Number,
  comments: [],
  index: Number,
  img: String,
  link: String,
});

const Reddit = mongoose.model('Reddit', RedditSchema);
module.exports = Reddit;