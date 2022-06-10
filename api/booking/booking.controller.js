'use strict';

import { Booking } from './booking.model.js';
import { User } from './../user/user.model.js';

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
 * Create a new booking
 */
export async function create(req, res, next) {
  const { latitude, longitude, email } = req.body;

  // search for driver
  const found = await User.getDriver({ latitude, longitude });
  if (!found) Promise.reject('Driver not found within range');

  return Booking.create({
    id: Date.now(),
    driver: found.email,
    user: email,
  })
    .then((booking) =>
      Object.assign({}, booking, { message: 'Booking succesfull' })
    )
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

/**
 * End trip
 */
export async function tripEnd(req, res, next) {
  return Booking.tripEnd(id)
    .then((booking) =>
      Object.assign({}, booking, { message: 'Trip ends succesfull' })
    )
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
}
