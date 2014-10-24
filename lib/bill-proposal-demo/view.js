/**
 * Module dependencies.
 */

var View = require('view');
var template = require('./bill-proposal');

function BillProposal(law) {
  View.call(this, template, {law: law});
}

View(BillProposal);

module.exports = BillProposal;