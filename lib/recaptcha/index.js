/**
 * Module dependencies.
 */

var express = require('express');
var Recaptcha = require('recaptcha').Recaptcha;
var config = require('lib/config');


var publicKey = config('recaptcha public key');
var privateKey = config('recaptcha private key');

/**
 * Exports Application
 */

var app = module.exports = express();