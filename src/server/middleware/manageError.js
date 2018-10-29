module.exports = function hanldeError(error, req, res, next) {
  let errorToHandle = error;

  const errObj = {
      code: 500,
      title: 'Internal Server Error',
      message: 'I\'m sorry but we encounter some problem on the server. Please retry in a minute...'
  }

  // Axios Response with error
  if(error && error.response && error.response.status){
      console.log('axios error: ', error.response);

      errorToHandle.code = errorToHandle.response.status.toString();
      // errorToHandle.url = error.response.config.url;
  }

  switch(errorToHandle.code){
      case 'ECONNREFUSED':
          console.log('Connection Refused');
          errObj.code = '503';
          errObj.title = 'Service Unavailable';
          errObj.message = 'I\'m sorry but the service is currently unavailable'
          break;
      case '404':
          console.log('Resource not found');
          errObj.code = '404';
          errObj.title = 'Resource not found';
          errObj.message = 'I\'m sorry but I can not find what you are looking for. ';
          break;
      default: 
          console.log('Unknow error', error);
          break;
  }

  res.errorObject = errObj;
  next();
}