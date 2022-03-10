// buttonOne

const buttonOne = document.querySelector(".buttonOne");

// Click Event

// API Request

buttonOne.addEventListener('click', function() {
    fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
  .then(function(response){
    return response.json();
  })
  .then(function(jsonResult){
    console.log('It worked!', jsonResult);
    console.log(jsonResult.content_urls.desktop.page)

// Print Start Point to Title Page

const startPoint = document.querySelector('.startPoint');
startPoint.textContent = jsonResult.title;

// Print Start Point Link to Page

const wikiStartLink = document.querySelector('.wikiStartLink');
wikiStartLink.textContent = jsonResult.content_urls.desktop.page;

const link = jsonResult.content_urls.desktop.page;

const a = document.getElementById('testLink2');
a.href = `${link}`


    });
});

// buttonTwo

const buttonTwo = document.querySelector(".buttonTwo");

buttonTwo.addEventListener('click', function() {
    fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
  .then(function(response){
    return response.json();
  })
  .then(function(jsonResult){

// print the endpoint info to the page
const endPoint = document.querySelector('.endPoint');
endPoint.textContent = jsonResult.title;


// print the link and create an anchor link to open new page
const wikiEndLink = document.querySelector('.wikiEndLink');
wikiEndLink.textContent = jsonResult.content_urls.desktop.page;

const link = jsonResult.content_urls.desktop.page;

const a = document.getElementById('testLink');
a.href = `${link}`

        });
});


// timer

const timer = document.getElementById('stopwatch');

let hr = 0;
let min = 0;
let sec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}

function resetTimer() {
    timer.innerHTML = '00:00:00';
    timer.innerHTML = "00:00:00";
    stoptime = true;
    hr = 0;
    sec = 0;
    min = 0;
}
