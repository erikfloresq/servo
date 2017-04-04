// catch 404 function
function notFound(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
}

// forward to error handler function
function errorHandler(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

export { notFound, errorHandler };
