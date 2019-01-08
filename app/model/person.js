'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const personSchema = new Schema({
    _id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    stories: {
      type: Schema.Types.ObjectId,
      ref: 'Story',
    },
  });
  return mongoose.model('Person', personSchema, 'person');
};
