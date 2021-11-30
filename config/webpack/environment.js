const { environment } = require('@rails/webpacker');
const paths = require('./paths.resolve');

environment.config.merge(paths);

module.exports = environment;
