'use strict';

(function () {

  var coatColor = document.querySelector('.setup-wizard-appearance [name=coat-color]').value;
  var eyesColor = document.querySelector('.setup-wizard-appearance [name=eyes-color]').value;

  var getRank = function (wizard) {

    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }

    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;

  };

  var updateWizards = function () {

    window.drawWizards(window.setup.wizards
      .slice()
      .sort(function (left, right) {

        var rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
          rankDiff = window.setup.wizards.indexOf(left) - window.setup.wizards.indexOf(right);
        }
        return rankDiff;

      }));

  };

  var onWizardsError = function (message) {
    throw new Error(message);
  };

  var setWizards = function (xhrData) {
    window.setup.wizards = xhrData;
    updateWizards();
  };

  window.backend.load(onWizardsError, setWizards);

  var onEyesChange = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  var onCoatChange = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  window.render = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange,
    updateWizards: updateWizards
  };

})();
