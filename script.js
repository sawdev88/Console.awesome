(function () {
  var bg = [[['#606c88'], ['#3f4c6b']],
            [['#43cea2'], ['#185a9d']],
            [['#FFA17F'], ['#00223E']],
            [['#948E99'], ['#2E1437']],
            [['#000000'], ['#53346D']],
            [['#360033'], ['#0b8793']]],
            randomNumber,
            bgColor;

  // Get random BG colors from array
  randomNumber = Math.floor(Math.random() * bg.length);
  var randPick = bg[randomNumber];

  // Add random color array to gradient builder
  function createBG(item1, item2) {
    bgColor = 'linear-gradient(to bottom, ' + item1 + ', ' + item2 + ')'
  }

  // Call create random background and apply to body;
  createBG(randPick[0], randPick[1]);
  document.body.style.background = bgColor;
}());

var getDate = function () {
  var currentDate = new Date(),
      day = currentDate.getDate(),
      month = currentDate.getMonth(),
      dateDisplay = document.querySelector('.date');

    // Set date
    dateDisplay.innerHTML = day + '/' + month;
}();

var getTime = function () {
  var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      timeDisplay = document.querySelector('.time'),
      myTime;

      if (hours > 12) {
        hours = hours - 12;
      }

      if (minutes < 10) {
        minutes = '0' + minutes;
      }

      myTime = hours + ':' + minutes;
    //Set hours
    timeDisplay.innerHTML = myTime;
    setTimeout(getTime, 500);

};

getTime();
