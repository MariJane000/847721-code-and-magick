'use strict';

(function () {

  window.renderStatistics = function (ctx, names, times) {

    var RECT_HEIGHT = 270;
    var RECT_WIDTH = 420;
    var RECT_X_OFFSET = 100;
    var RECT_Y_OFFSET = 10;
    var TITLE_X_OFFSET = 130;
    var TITLE_Y_OFFSET = 40;
    var FIRST_COLUMN_X_OFFSET = 155;
    var COLUMN_Y_OFFSET = 90;
    var COLUMN_WIDTH = 40;

    var drawRectangle = function (context, color, x, y, width, height) {
      context.fillStyle = color;
      context.fillRect(x, y, width, height);
    };

    var getMaxNumberInArray = function (array) {
      var maxValue = array[0];
      for (var i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
          maxValue = array[i];
        }
      }
      return maxValue;
    };

    drawRectangle(ctx, 'rgba(0, 0, 0, 0.7)', RECT_X_OFFSET + 10, RECT_Y_OFFSET + 10, RECT_WIDTH, RECT_HEIGHT);
    drawRectangle(ctx, 'rgba(255, 255, 255, 1)', RECT_X_OFFSET, RECT_Y_OFFSET, RECT_WIDTH, RECT_HEIGHT);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.font = '16px "PT Mono"';
    ctx.fillText('Ура вы победили!', TITLE_X_OFFSET, TITLE_Y_OFFSET);
    ctx.fillText('Список результатов:', TITLE_X_OFFSET, TITLE_Y_OFFSET + 20);

    var maxTime = getMaxNumberInArray(times);

    for (var i = 0; i < names.length; i++) {
      var playerName = names[i];
      var playerTime = times[i];
      var columnHeight = 150 * (playerTime / maxTime);
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillText(playerName, 155 + (90 * i), 260);
      ctx.fillText(Math.round(playerTime), 155 + (90 * i), 80 + (150 - columnHeight));
      // Здесь использую hsl, потому что в hsl удобно работать с насыщенностью.
      var columnColor = playerName === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + window.util.getRandom(0, 100) + '%, 50%)';
      drawRectangle(ctx, columnColor, FIRST_COLUMN_X_OFFSET + (90 * i), COLUMN_Y_OFFSET + (150 - columnHeight), COLUMN_WIDTH, columnHeight);
    }

  };

})();

