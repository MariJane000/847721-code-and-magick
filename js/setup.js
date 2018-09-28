'use strict';

(function () {

  var wizard = {
    generate: function (numberWizards) {
      var outputList = [];

      for (var i = 0; i < numberWizards; i++) {
        var wizardObject = {
          'name': window.util.NAMES[window.util.getRandom(0, window.util.NAMES.length - 1)] + ' ' + window.util.SURNAMES[window.util.getRandom(0, window.util.SURNAMES.length - 1)],
          'coatColor': window.util.WizardColor.COAT[window.util.getRandom(0, window.util.WizardColor.COAT.length - 1)],
          'eyesColor': window.util.WizardColor.EYES[window.util.getRandom(0, window.util.WizardColor.EYES.length - 1)]
        };

        outputList.push(wizardObject);
      }

      return outputList;
    },
    draw: function () {
      var template = document.querySelector('#similar-wizard-template').content;
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < wizards.length; i++) {
        var element = template.cloneNode(true);
        element.querySelector('.setup-similar-label').textContent = wizards[i].name;
        element.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
        element.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
        fragment.appendChild(element);
      }
      document.querySelector('.setup-similar-list').appendChild(fragment);
    }
  };

  var wizards = wizard.generate(4);

  wizard.draw();

  document.querySelector('.setup-similar').classList.remove('hidden');

  var isSetupOpened = false;

  var popup = {
    close: function () {
      document.querySelector('.setup').classList.add('hidden');
      isSetupOpened = false;
      document.querySelector('.upload').removeEventListener('mousedown', window.dialogDragAndDrop);
      document.querySelector('.setup').style.top = '80px';
      document.querySelector('.setup').style.left = '50%';
    },
    open: function () {
      document.querySelector('.setup').classList.remove('hidden');
      isSetupOpened = true;
      document.querySelector('.upload').addEventListener('mousedown', window.dialogDragAndDrop);
    }
  };

  var onPopupEnterKeydown = function (evt) {
    if (!isSetupOpened && evt.keyCode === window.util.Keycode.ENTER && document.querySelector('.setup-open-icon') === document.activeElement) {
      popup.open();
    }
  };

  var onPopupEscKeydown = function (evt) {
    if (isSetupOpened && evt.keyCode === window.util.Keycode.ESC) {
      popup.close();
    }
  };

  var onPopupCloseIconEnterKeydown = function (evt) {
    if (isSetupOpened && evt.keyCode === window.util.Keycode.ENTER && document.querySelector('.setup-close') === document.activeElement) {
      popup.close();
    }
  };

  window.setup = {
    onPopupEnterKeydown: onPopupEnterKeydown,
    onPopupEscKeydown: onPopupEscKeydown,
    onPopupCloseIconEnterKeydown: onPopupCloseIconEnterKeydown,
    popup: popup
  };

})();
