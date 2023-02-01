const consoleLog = (req, res, next) => {
  console.log('Middleware called');
  next();
};

module.exports = consoleLog;
