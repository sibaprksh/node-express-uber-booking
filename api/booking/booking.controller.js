'use strict';

const { User } = require('./../user/user.model');
const { Booking } = require('./booking.model');
const config = require('../../config/environment');

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
exports.create = async function (req, res, next) {
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
};

/**
 * End trip
 */
exports.tripEnd = async function (req, res, next) {
  return Booking.tripEnd(id)
    .then((booking) =>
      Object.assign({}, booking, { message: 'Trip ends succesfull' })
    )
    .then(respondWithResult(res, 200))
    .catch(handleError(res));
};
