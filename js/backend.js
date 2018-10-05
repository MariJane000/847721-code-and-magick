'use strict';

// backend.js

(function () {

  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var SAVE_URL = 'https://js.dump.academy/code-and-magick';

  var load = function (onError, onSuccess, onLoad) {

    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError('Cтатус ответа: ' + xhr.status + ' — ' + xhr.statusText);
      }
      if (onLoad) {
        onLoad();
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    xhr.open('GET', LOAD_URL);
    xhr.send();

  };

  var save = function (onError, onSuccess) {

    var xhr = new XMLHttpRequest();
    xhr.open('POST', SAVE_URL, true);

    xhr.onreadystatechange = function () {

      if (this.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        onSuccess();
      } else {
        onError();
      }

    };

    xhr.send(new FormData(document.querySelector('.setup-wizard-form')));

  };


  window.backend = {
    load: load,
    save: save
  };

})();