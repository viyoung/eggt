'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UseSchema = new Schema({
    account: {
      type: String,
    },
    password: {
      type: String,
    },
  });
  return mongoose.model('User', UseSchema, 'user');
};
