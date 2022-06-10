'use strict';

import bodyParser from 'body-parser';
import expressValidator from 'express-validator';

export default function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(
    expressValidator({
      customValidators: {
        isLatitude: function (value) {
          return /^(-?[1-8]?\d(?:\.\d{1,8})?|90(?:\.0{1,8})?)$/.test(value);
        },
        isLongitude: function (value) {
          return /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,8})?|180(?:\.0{1,8})?)$/.test(
            value
          );
        },
      },
    })
  );
}
