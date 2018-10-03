'use strict';

// listener.js

(function () {

  document.querySelector('.setup-open').addEventListener('click', window.setup.popup.open);
  document.querySelector('.setup-close').addEventListener('click', window.setup.popup.close);
  document.addEventListener('keydown', window.setup.onPopupEnterKeydown);
  document.addEventListener('keydown', window.setup.onPopupEscKeydown);
  document.addEventListener('keydown', window.setup.onPopupCloseIconEnterKeydown);

  document.querySelector('.setup-wizard .wizard-coat').addEventListener('click', function () {
    var newCoatColor = window.util.WizardColor.COAT[window.util.getRandom(0, window.util.WizardColor.COAT.length - 1)];
    while (newCoatColor === document.querySelector('.setup-wizard .wizard-coat').style.fill) {
      newCoatColor = window.util.WizardColor.COAT[window.util.getRandom(0, window.util.WizardColor.COAT.length - 1)];
    }
    document.querySelector('.setup-wizard .wizard-coat').style.fill = newCoatColor;
    document.querySelector('[name="coat-color"]').value = newCoatColor;
  });

  document.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', function () {
    var newEyesColor = window.util.WizardColor.EYES[window.util.getRandom(0, window.util.WizardColor.EYES.length - 1)];
    while (newEyesColor === document.querySelector('.setup-wizard .wizard-eyes').style.fill) {
      newEyesColor = window.util.WizardColor.EYES[window.util.getRandom(0, window.util.WizardColor.EYES.length - 1)];
    }
    document.querySelector('.setup-wizard .wizard-eyes').style.fill = newEyesColor;
    document.querySelector('[name="eyes-color"]').value = newEyesColor;
  });

  document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
    var newFireballColor = window.util.WizardColor.FIREBALL[window.util.getRandom(0, window.util.WizardColor.FIREBALL.length - 1)];
    while (newFireballColor === document.querySelector('.setup-fireball-wrap').style.background) {
      newFireballColor = window.util.WizardColor.FIREBALL[window.util.getRandom(0, window.util.WizardColor.FIREBALL.length - 1)];
    }
    document.querySelector('.setup-fireball-wrap').style.background = newFireballColor;
    document.querySelector('[name="fireball-color"]').value = newFireballColor;
  });

})();
