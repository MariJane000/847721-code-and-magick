'use strict';

// util.js

(function () {

  var getRandom = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };

  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var WizardColor = {
    COAT: [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ],
    EYES: [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ],
    FIREBALL: [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ]
  };

  window.util = {
    getRandom: getRandom,
    ENTER_KEYCODE: ENTER_KEYCODE,
    ESC_KEYCODE: ESC_KEYCODE,
    WizardColor: WizardColor
  };

})();
