'use strict';
const Crypto = require('crypto');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

exports.MD5 = function(val) {
  const hash = Crypto.createHash('md5');
  hash.update(val);
  return hash.digest('hex');
};
exports.generateToken = function(data, time) {
  const created = Math.floor(Date.now() / 1000);
  const cert = fs.readFileSync(path.join(__dirname, '../public/rsa_private_key.pem')); // 私钥
  const token = jwt.sign({
    data,
    exp: created + time,
  }, cert, { algorithm: 'RS256' });
  return token;
};
