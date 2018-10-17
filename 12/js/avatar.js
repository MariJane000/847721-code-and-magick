'use strict';

(function () {

  var FileTypes = [
    'gif',
    'jpg',
    'jpeg',
    'png',
    'svg',
    'ico'
  ];

  var fileChooser = document.querySelector('[name=avatar]');
  var preview = document.querySelector('.setup-user-pic');

  if (preview) {
    fileChooser.addEventListener('change', function () {

      var file = fileChooser.files[0];
      if (file) {
        var fileName = file.name.toLowerCase();

        var matches = FileTypes.some(function (item) {
          return fileName.endsWith(item);
        });

        if (matches) {
          var reader = new FileReader();
          reader.addEventListener('load', function () {
            preview.src = reader.result;
          });
          reader.readAsDataURL(file);
        } else {
          preview.src = './img/user-1.jpg';
        }
      }

    });
  }

})();
