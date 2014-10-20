/**
 * Module dependencies.
 */

var config = require('lib/config');
var jade = require('jade');
var path = require('path');
var resolve = path.resolve;
var express = require('express');
var app = module.exports = express();

app.get('/bill-proposal-demo',  function (req, res, next) {
  res.render(resolve(__dirname, 'index.jade'), { config: config });
});

app.get('/bill-proposal-demo/show', function (req, res, next) {
  res.render(resolve(__dirname, 'show.jade'), { config: config });
});