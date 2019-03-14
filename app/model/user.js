'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UseSchema = new Schema({
    userName: {
      type: String,
    },
    account: {
      type: String,
    },
    password: {
      type: String,
    },
  });
  return mongoose.model('User', UseSchema, 'user');
};
