import { check } from '../../utils.js';

export function create(req, res, next) {
  req.checkQuery({
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
