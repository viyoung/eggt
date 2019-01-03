'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    hobby: {
      type: Array,
    },
  });
  return mongoose.model('Post', PostSchema, 'test');
};
