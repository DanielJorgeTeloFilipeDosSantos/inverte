
'use strict';

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});

const signInStatic = require('./user-sign-in-static');
const signUpStatic = require('./user-sign-up-static');

schema.statics.signIn = signInStatic;
schema.statics.signUp = signUpStatic;

schema.statics.findByEmail = function(email) {

  const Model = this;
  return Model.findOne({ email })
    .then(user => {
    return Promise.resolve(user);
  })
  .catch(error => {
  return Promise.reject(error);
  });
};

module.exports = mongoose.model('User', schema);