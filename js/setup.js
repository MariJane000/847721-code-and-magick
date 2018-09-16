'use strict';

// constants

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

// constants - end

var getRandom = function (from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

var generateWizards = function (numberWizards) {
  var outputList = [];

  for (var i = 0; i < numberWizards; i++) {
    var wizardObject = {
      'name': NAMES[getRandom(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandom(0, SURNAMES.length - 1)],
      'coatColor': COAT_COLOR[getRandom(0, COAT_COLOR.length - 1)],
      'eyesColor': EYES_COLOR[getRandom(0, EYES_COLOR.length - 1)]
    };

    outputList.push(wizardObject);
  }

  return outputList;
};

var wizards = generateWizards(4);

var drawWizards = function () {
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
};

drawWizards();

document.querySelector('.setup-similar').classList.remove('hidden');

var isSetupOpened = false;

var closePopup = function () {
  document.querySelector('.setup').classList.add('hidden');
  isSetupOpened = false;
};

var openPopup = function () {
  document.querySelector('.setup').classList.remove('hidden');
  isSetupOpened = true;
};

var onPopupEnterKeydown = function (evt) {
  if (!isSetupOpened && evt.keyCode === ENTER_KEYCODE && document.querySelector('.setup-open-icon:focus')) {
    openPopup();
  }
};

var onPopupEscKeydown = function (evt) {
  if (isSetupOpened && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var onPopupTimesEnterKeydown = function (evt) {
  if (isSetupOpened && evt.keyCode === ENTER_KEYCODE && document.querySelector('.setup-close:focus')) {
    closePopup();
  }
};

document.querySelector('.setup-open').addEventListener('click', openPopup);
document.querySelector('.setup-close').addEventListener('click', closePopup);
document.addEventListener('keydown', onPopupEnterKeydown);
document.addEventListener('keydown', onPopupEscKeydown);
document.addEventListener('keydown', onPopupTimesEnterKeydown);

document.querySelector('.setup-wizard .wizard-coat').addEventListener('click', function () {
  var newCoatColor = COAT_COLOR[getRandom(0, COAT_COLOR.length - 1)];
  document.querySelector('.setup-wizard .wizard-coat').style.fill = newCoatColor;
  document.querySelector('[name="coat-color"]').value = newCoatColor;
});

document.querySelector('.setup-wizard .wizard-eyes').addEventListener('click', function () {
  var newEyesColor = EYES_COLOR[getRandom(0, EYES_COLOR.length - 1)]
  document.querySelector('.setup-wizard .wizard-eyes').style.fill = newEyesColor;
  document.querySelector('[name="eyes-color"]').value = newEyesColor;
});

document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
  var newFireballColor = FIREBALL_COLOR[getRandom(0, FIREBALL_COLOR.length - 1)]
  document.querySelector('.setup-fireball-wrap').style.background = newFireballColor;
  document.querySelector('[name="fireball-color"]').value = newFireballColor;
});
