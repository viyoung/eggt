'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/logins', controller.login.login);
  router.get('/', controller.user.findAll);
  router.post('/add', controller.user.add);
  router.post('/removeUser', controller.user.removeUser);
  router.post('/update', controller.user.update);
  router.post('/personAdd', controller.person.add);
  router.post('/titleGetAuthor', controller.person.titleGetAuthor);
  router.post('/register', controller.register.register);
  router.post('/publishjob', controller.boos.publishjob);
};
