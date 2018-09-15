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

// constants - end

document.querySelector('.setup').classList.remove('hidden');

var getRandom = function (from, to) {
  return Math.floor(Math.random() * (to - from + 1)) + from;
};

var generateWizards = function (numberWizards) {
  var outputList = [];

  for (var i = 0; i < numberWizards; i++) {
    var wizardObject = {
      'name':  NAMES[getRandom(0, NAMES.length - 1)] + ' ' + SURNAMES[getRandom(0, SURNAMES.length - 1)],
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
