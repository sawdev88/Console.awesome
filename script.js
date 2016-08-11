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
    dateDisplay.innerHTML = month + '/' + day;
}();

var getTime = function () {
  var time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      timeDisplay = document.querySelector('.time'),
      myTime;

    // Set to 12 hour format
    if (hours > 12) {
      hours = hours - 12;
    }

    // Add 0 to the minutes if < 10
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    myTime = hours + ':' + minutes;
    //Set hours
    timeDisplay.innerHTML = myTime;
    setTimeout(getTime, 500);
};

// Call getTime for setTimeout to update time
getTime();

var search = function () {
  var searchBuilder = 'https://www.google.com/#q=',
      searchText = document.querySelector('.search-text'),
      searchButton = document.querySelector('.search-button');

    // Open google search results
    searchButton.addEventListener('click', function() {
      var query = searchText.value;
      if (query.length > 0) {
        var result = searchBuilder + query;
        window.open(result);
      }
    });
}();

// Add item to todo list
var a = function (arg) {
  var todo = document.querySelector('.todo'),
      item = document.createElement('li');

    item.innerHTML = arg;
    todo.appendChild(item);
};

// Mark item complete on todo list
var m = function (index) {
  var list = document.getElementsByTagName('ul')[0],
      item = list.getElementsByTagName('li');

  item[index].setAttribute("class", "complete");
};

// Delete item from todo list
var d = function (index) {
  var list = document.getElementsByTagName('ul')[0],
      item = list.getElementsByTagName('li');

  item[index].parentNode.removeChild(item[index]);
}

// Clear todo list
var deleteAll = function () {
  var list = document.getElementsByTagName('ul')[0];

  list.innerHTML = '';
}

// Get chuck Norris jokes and be happy
$.getJSON('http://api.icndb.com/jokes/random', function (json) {
  var joke = document.querySelector('.chuck');
  joke.innerHTML = json.value.joke;
})

// Clear console
var c = function () {
  return console.clear();
}

// Open doc in tab
var doc = function () {
  window.open('http://devdocs.io/');
}

// Log argument
var l = function (item) {
  return console.log(item);
}

var i = function i() {
  console.log('Welcome to console.awesome!');
  console.log('++++++ TODO LIST ++++++');
  console.log('Add item to list with a(item)');
  console.log('Mark item complete with m(index) | ** index starts at 0');
  console.log('Delete item with d(index) | ** index starts at 0');
  console.log('Delete all items with deleteAll()');
  console.log('\nClear console with c()');
  console.log('\nconsole.log with l()');
  console.log('\nOpen Docs with doc()');
  console.log('\nOpen Instructions with i()');
};

i();
