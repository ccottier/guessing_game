function myFunction() {
  var userName = prompt('What\'s Your Name?');
  alert('Hello '+ userName +'\! Thanks for coming to my first website. Let\'s play a game so that you can get to know me a better.');
}
myFunction()

var answerOne = prompt('In which state was I born?');
var myAnswerOne = 'Pennsylvania';

if (answerOne === myAnswerOne) {
  alert('You\'re correct! I was born in the oldest hospital in the United States which was founded by Ben Franklin.');
} else {
  alert('Sorry, that was incorrect.  I was born in Philadelphia, PA.');
}
myAnswerOne()

var answerTwo = prompt('Do I prefer dogs over cats?');
var myAnswerTwo = 'No';

if (answerTwo === myAnswerTwo) {
  alert('Correct. I love cats.');
} else {
  alert('Nope. I much prefer cats over dogs.');
}
myAnswerTwo()


var answerThree = prompt('Am I a morning person?');
var myAnswerThree = 'No';

if (answerThree === myAnswerThree) {
  alert('Correct! I\'m more of a night owl.');
} else {
  alert('Incorrect. I\'m not an early bird.');
}

myAnswerThree()
