'use strict';

window.renderStatistics = function (ctx, names, times) {

  var RECT_HEIGHT = 270;
  var RECT_WIDTH = 420;
  var RECT_X_OFFSET = 100;
  var RECT_Y_OFFSET = 10;
  var TITLE_X_OFFSET = 130;
  var TITLE_Y_OFFSET = 40;
  
  var getRandom = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };

  var namesNum = names.length;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(RECT_X_OFFSET + 10 , RECT_Y_OFFSET + 10, RECT_WIDTH, RECT_HEIGHT);
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(RECT_X_OFFSET, RECT_Y_OFFSET, RECT_WIDTH, RECT_HEIGHT);
  ctx.fillStyle = 'rgba(0, 0, 0, 1)';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', TITLE_X_OFFSET, TITLE_Y_OFFSET);
  ctx.fillText('Список результатов:', TITLE_X_OFFSET, TITLE_Y_OFFSET + 20);

  var getMaxNumInArray = function (array) {
    var maxValue = array[0];
    for (var i = 1; i < array.length; i++) {
      if (array[i] > maxValue) {
        maxValue = array[i];
      }
    }
    return maxValue;
  };

  var maxTime = getMaxNumInArray(times);

  for (var i = 0; i < namesNum; i++) {
    var playerName = names[i];
    var playerTime = times[i];
    var columnHeight = 150 * (playerTime / maxTime);
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText(playerName, 155 + (90 * i), 260);
    ctx.fillText(Math.round(playerTime), 155 + (90 * i), 80 + (150 - columnHeight));

    if (playerName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
	    // Здесь использую hsl, потому что в hsl удобно работать с насыщенностью.
      ctx.fillStyle = 'hsl(240, ' + getRandom(0, 100) + '%, 50%)';
    }
    
    ctx.fillRect(155 + (90 * i), 90 + (150 - columnHeight), 40, columnHeight);
  }

};
