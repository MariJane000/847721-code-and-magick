'use strict';

window.renderStatistics = function (ctx, names, times) {

  var getRand = function (from, to) {  
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };
  
  var namesNum = names.length;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000000';
  ctx.font = '16px "PT Mono"';
  ctx.fillText('Ура вы победили!', 130, 40);
  ctx.fillText('Список результатов:', 130, 60);

  var maxNumInArray = function (arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  };

  var maxTime = maxNumInArray(times);

  for (var i = 0; i < namesNum; i++) {
    var thisName = names[i];
    var thisTime = times[i];
    var columnHeight = 150 * (thisTime / maxTime);
    ctx.fillStyle = '#000000';
    ctx.fillText(thisName, 155 + (90 * i), 260);
    ctx.fillText(Math.round(thisTime), 155 + (90 * i), 80 + (150 - columnHeight));

    if (thisName === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var randomSaturation = getRand (0, 128);
      ctx.fillStyle = 'rgba(' + randomSaturation + ', ' + randomSaturation + ', ' + (255 - randomSaturation) + ', 1)';
    }

    ctx.fillRect(155 + (90 * i), 90 + (150 - columnHeight), 40, columnHeight);
  }

};
