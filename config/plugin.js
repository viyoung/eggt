'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enabled: true,
  package: 'egg-mongoose',
};
exports.redis = {
  enable: true,
  package: 'egg-redis',
};
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
