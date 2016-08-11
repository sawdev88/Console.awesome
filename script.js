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

var search = function () {
  var searchBuilder = 'https://www.google.com/#q=',
      searchText = document.querySelector('.search-text'),
      searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', function() {
      var query = searchText.value;
      if (query.length > 0) {
        var result = searchBuilder + query;
        window.open(result);
      }
    });
}();

var add = function (arg) {
  var todo = document.querySelector('.todo'),
      item = document.createElement('li');

    item.innerHTML = arg;
    todo.appendChild(item);
};

var markComplete = function (index) {
  var list = document.getElementsByTagName('ul')[0],
      item = list.getElementsByTagName('li');

  item[index].setAttribute("class", "complete");
};

var deleteItem = function (index) {
  var list = document.getElementsByTagName('ul')[0],
      item = list.getElementsByTagName('li');

  item[index].parentNode.removeChild(item[index]);
}

var deleteAll = function () {
  var list = document.getElementsByTagName('ul')[0],

  list.innerHTML = '';
}

var c = function () {
  return console.clear();
}

console.log('Welcome to console.awesome!');
console.log('++++++ TODO LIST +++++');
console.log('Add item to list with add(item)');
console.log('Mark item complete with markComplete(index)');
console.log('Delete item with deleteItem(index)');
console.log('\nClear console with c() ');
