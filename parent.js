const { child } = require('./child');

module.exports.parent = () => {
  return child();
};
