const ceneo = require('express').Router();
const extract = require('./extract');
const transform = require('./transform');
const load = require('./load');
const displayData = require('./displayData');
const etl = require('./etl');
const clearDb = require('./clearDb');
const csv = require('./csv');

ceneo.get('/extract', extract);
ceneo.get('/transform', transform);
ceneo.get('/load', load);
ceneo.get('/displayData', displayData);
ceneo.get('/etl', etl);
ceneo.get('/clearDb', clearDb);
ceneo.get('/csv', csv);

module.exports = ceneo;
