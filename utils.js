export function check(req, res, next) {
  var errors = req.validationErrors();
  if (errors) {
    res.status(422);
    res.json({
      msg: 'Validation Failed',
      raw: errors,
    });
    return;
  }
  next();
}
