var utils = require('../../utils');

exports.signup = function (req, res, next) {
  req.checkBody({
    name: {
      notEmpty: true,
      errorMessage: 'Invalid Name',
    },
    email: {
      notEmpty: true,
      errorMessage: 'Invalid email',
    },
    password: {
      notEmpty: true,
      errorMessage: 'Invalid password',
    },
    role: {
      notEmpty: true,
      errorMessage: 'Invalid role',
    },
  });

  utils.check(req, res, next);
};

exports.login = function (req, res, next) {
  req.checkBody({
    email: {
      notEmpty: true,
      errorMessage: 'Invalid email',
    },
    password: {
      notEmpty: true,
      errorMessage: 'Password missing',
    },
  });

  utils.check(req, res, next);
};

exports.availability = function (req, res, next) {
  req.checkBody({
    email: {
      notEmpty: true,
      errorMessage: 'Invalid email',
    },
    latitude: {
      notEmpty: true,
      isLatitude: true,
      errorMessage: 'Invalid Latitude',
    },
    longitude: {
      notEmpty: true,
      isLongitude: true,
      errorMessage: 'Invalid Longitude',
    },
  });

  utils.check(req, res, next);
};
