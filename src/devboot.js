require('./index.css');

const main = require('./main');
const tests = require('./tests');

module.exports = main.app;
module.exports.Tests = tests.tests;
