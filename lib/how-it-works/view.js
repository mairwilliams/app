var log = require('debug')('democracyos:how-it-works:view');
var o = require('query');
var template = require('./template');
var View = require('view');
var Popover = require('popover');
var cookie = require('cookie');
var t = require('t');
var ripple = require('ripple');

/**
 * Expose HowItWorksPopover
 */
module.exports = HowItWorksPopover;

function HowItWorksPopover() {
  if (!(this instanceof HowItWorksPopover)) {
    return new HowItWorksPopover(proposals);
  }

}

HowItWorksPopover.prototype.loadPopover = function() {
  var PopoverContent = ripple(template.apply());
  var popover = {};
  PopoverContent.directive('on-click', function(value, el, view){
      el.addEventListener('click', function() {
        if('got-it' === value) {
          log("How it works cookie set,hide popover");
          cookie('how-it-works', true);
          popover.hide();
        }
      });
  });

  var content = new PopoverContent({
    link: t("how it works.link"),
    buttonTitle: t("how it works.ok-button")
  });

  popover = new Popover(content.el, t("how it works.title"));


  //popover.show('.logo-link');

  popover.show('img.logo');
};

HowItWorksPopover.prototype.load = function() {
  if (!cookie('how-it-works')) {
    log("How it works cookie not set, load popover");
    this.loadPopover();
  }
};