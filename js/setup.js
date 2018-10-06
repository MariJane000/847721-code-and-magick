'use strict';

(function () {

  var drawWizards = function (wizards) {
    var template = document.querySelector('#similar-wizard-template').content;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < (wizards.length > 4 ? 4 : wizards.length); i++) {
      var element = template.cloneNode(true);
      element.querySelector('.setup-similar-label').textContent = wizards[i].name;
      element.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      element.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      fragment.appendChild(element);
    }
    document.querySelector('.setup-similar-list').appendChild(fragment);
  };


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
    if (!isSetupOpened && evt.keyCode === window.util.ENTER_KEYCODE && document.querySelector('.setup-open-icon') === document.activeElement) {
      popup.open();
    }
  };

  var onPopupEscKeydown = function (evt) {
    if (isSetupOpened && evt.keyCode === window.util.ESC_KEYCODE) {
      popup.close();
    }
  };

  var onPopupCloseIconEnterKeydown = function (evt) {
    if (isSetupOpened && evt.keyCode === window.util.ENTER_KEYCODE && document.querySelector('.setup-close') === document.activeElement) {
      popup.close();
    }
  };

  document.querySelector('.setup-wizard-form').addEventListener('submit', function (evt) {

    evt.preventDefault();

    var onError = function () {

      var element = document.querySelector('#error').content.querySelector('div').cloneNode(true);
      element.classList.add('error-modal');
      document.body.appendChild(element);

      document.querySelector('.error-modal').addEventListener('click', function () {
        document.querySelector('.error-modal').remove();
      });

    };

    window.backend.save(onError, function () {
      popup.close();
    });

  });

  window.setup = {
    onPopupEnterKeydown: onPopupEnterKeydown,
    onPopupEscKeydown: onPopupEscKeydown,
    onPopupCloseIconEnterKeydown: onPopupCloseIconEnterKeydown,
    popup: popup,
    wizards: null
  };

  var onWizardsError = function (message) {
    throw new Error(message);
  };

  var setWizards = function (xhrData) {
    window.setup.wizards = xhrData;
    drawWizards(window.setup.wizards);
  };

  window.backend.load(onWizardsError, setWizards);

})();
