'use strict';

import { User } from './user.model.js';

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(204).end();
      return null;
    }
    return entity;
  };
}

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

/**
 * Creates all users
 */
export function getAll(req, res, next) {
  return User.find().then(respondWithResult(res)).catch(handleError(res));
}

/**
 * Login
 */
export function login(req, res, next) {
  const { email, password } = req.body || {};
  return User.findOne({ email, password })
    .then((user) => {
      //TODO: Send JWT token
      return 'this-will-replace-with-jwt-token';
    })
    .then(respondWithResult(res))
    .catch(handleError(res));
}

/**
 * Creates a new user
 */
export function create(req, res, next) {
  return User.create(req.body)
    .then(function (user) {
      //TODO: Send JWT token
      return 'TODO:this-will-replace-with-jwt-token';
    })
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

/**
 * Update driver: available true
 */
export function available(req, res) {
  const { latitude, longitude, email } = req.body;
  return User.available(email, { latitude, longitude })
    .then(function (user) {
      return 'Driver is available';
    })
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}

/**
 * Update driver: available false
 */
export function unavailable(req, res) {
  return User.unavailable(req.email)
    .then(function (user) {
      return 'Driver is unavailable';
    })
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}
