module.export = function(err, req, res, next){
    console.log('@@@Error', err, req, res, next);
    if (res.headersSent) {
      return next(err);
    }

    res.status(500);
    res.render('error', { error: err });
  }
  