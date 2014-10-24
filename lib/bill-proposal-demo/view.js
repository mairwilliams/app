/**
 * Module dependencies.
 */

var View = require('view');
var laws = require('laws');
var template = require('./bill-proposal');
var page = require('page');

function BillProposal(law) {
  this.law = law;
  this.previousLaw = laws.prev(law);
  this.nextLaw = laws.next(law);

  View.call(this, template, {law: law, previousLaw: this.previousLaw, nextLaw: this.nextLaw});
}

View(BillProposal);

/**
 * Turn on event bindings
 */

BillProposal.prototype.switchOn = function() {
  this.bind('click', '.next', this.bound('next'));
  this.bind('click', '.prev', this.bound('prev'));
}

/**
 * Turn off event bindings
 */

BillProposal.prototype.switchOff = function() {
  this.unbind('click', '.next', this.bound('next'));
  this.unbind('click', '.prev', this.bound('prev'));
}

BillProposal.prototype.next = function() {
  page('/law/:id'.replace(':id', this.nextLaw.id));
};

BillProposal.prototype.prev = function() {
  page('/law/:id'.replace(':id', this.previousLaw.id));
};

module.exports = BillProposal;