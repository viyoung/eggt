'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const storySchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'Person',
    },
    title: {
      type: String,
    },
  });
  return mongoose.model('Story', storySchema, 'story');
};
