/**
 * Module dependencies.
 */

var page = require('page');
var bus = require('bus');

/**
 * Routes.
 */

page('/bill-proposal-demo', function (ctx, next) {
  return bus.emit('page:render');
});

page('/bill-proposal-demo/show', function (ctx, next) {
  return bus.emit('page:render');
});
