'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.findAll);
  router.post('/add', controller.user.add);
  router.post('/removeUser', controller.user.removeUser);
  router.post('/update', controller.user.update);
};
