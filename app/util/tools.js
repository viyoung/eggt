'use strict';
const md5 = require('md5');
const jwt = require('jsonwebtoken');

exports.MD5 = function(val, salt) {
  const passwordSalt = md5(md5(val) + salt);

  return passwordSalt;
};
exports.generateToken = function(data, time) {
  const created = Math.floor(Date.now() / 1000);
  const cert = 'mytokenPrivateKey';
  const token = jwt.sign(data, cert, { expiresIn: created + time });
  return token;
};
