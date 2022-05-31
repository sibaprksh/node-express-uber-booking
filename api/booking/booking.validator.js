var utils = require('../../utils');

exports.create = function (req, res, next) {
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

  utils.check(req, res, next);
};
