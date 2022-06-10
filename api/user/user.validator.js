import { check } from '../../utils.js';

export function login(req, res, next) {
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

  check(req, res, next);
}

export function availability(req, res, next) {
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

  check(req, res, next);
}
