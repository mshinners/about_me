'use strict';
//
var score = 0;

var greeting = ('Hello, user. I would like you to play a guessing game about me. To begin, please tell me your name.');
var userName = prompt(greeting);

function firstQuestion() {
  var questionOne = 'Okay, ' + userName + ' Have I ever lived in a foreign country?';
  var country = prompt(questionOne).toLowerCase();
  if (country === 'yes' || country === 'y') {
    alert ('You are Correct! I lived in the Middle East country of Bahrain.');
    score++;
  } else {
    alert('Wrong Answer! I lived in Bahrain for 4 years.');
  }
  console.log('Question 1: ' + questionOne + '| Answer: ' + country);
}
firstQuestion();


function secondQuestion() {
  var questionTwo = 'Next question ' + userName + ', have I ever walked out of a movie because it was so bad?';
  var movie = prompt(questionTwo).toLowerCase();
  if (movie === 'yes' || movie === 'y') {
    alert ('You are Correct! I\'m sorry to say that the movie was "Space Balls"');
    score++;
  } else {
    alert('Wrong Answer! I actually walked out of "Space Balls" the first time I saw it.');
  }
console.log('Question 2:' + questionTwo + '| Answer:' + movie);
}
secondQuestion();

function thirdQuestion() {
  var questionThree = 'Have I ever had a paranormal experience, ' + userName + '?';
  var ghost = prompt(questionThree).toLowerCase();
  if (ghost === 'no' || ghost === 'n') {
    alert ('You are Correct! While I have heard things I can\'t explain, I wouldn\'t classify that as paranormal.');
    score++;
  } else {
    alert('Wrong Answer! I have never seen things flying through the air.');
  }
  console.log('Question 3:' + questionThree + '| Answer:' + ghost);
}
thirdQuestion();

function fourthQuestion() {
  var questionFour = userName + ', have I ever had a surprise party thrown for me?';
  var party = prompt(questionFour).toLowerCase();
  if (party === 'yes' || party === 'y') {
    alert ('You are Correct! My wife put one together for my 35th(?) birthday.');
    score++;
  } else {
    alert('Wrong Answer! I had one with a small group of friends when I turned 35.');
  }
  console.log('Question 4:' + questionFour + '| Answer:' + party);
}
fourthQuestion();

function fifthQuestion() {
  var questionFive = 'Have I ever thrown up on a roller coaster, ' + userName + '?';
  var coaster = prompt(questionFive).toLowerCase();
  if (coaster === 'no' || coaster === 'n') {
    alert ('You are Correct! I\'ve remained vommit-free on all amusement rides.');
    score++;
  } else {
    alert('Wrong Answer! That\'s totally gross and I never!');
  }
  console.log('Question 5:' + questionFive + '| Answer:' + coaster);
}
fifthQuestion();

function sixthQuestion() {
  for (var i = 0; i < 4; i++) {
    var questionSix = 'I have moved quite a bit during my life. Can you,  ' + userName + ',  guess how many homes I\'ve had?';
    var answer = prompt(questionSix);
    if (answer == 28) {
      alert ('Spot on! Great Job!');
      score++;
      break;
    } else if (answer < 28) {
      alert ('Too Low, try again.');
    } else if (answer > 28) {
      alert ('Too high, try again.');
    }
  }
  console.log('Question 6:' + questionSix + '| Answer:' + answer);
}
sixthQuestion();

function seventhQuestion() {
  for (var i = 0; i < 6; i++) {
    var questionSeven = 'I have lived in some states other than Washington for a time. ' + userName + ', please name just one of them?';
    var answer = prompt(questionSeven);
    var states = ['delaware', 'florida', 'nevada', 'georgia'];
    if (states.includes(answer.toLowerCase())) {
      alert ('Yes! Have you been stalking me???');
      score++;
      var answerSeven = true;
      break;
    } else {
      alert ('Nope, guess again.');
    }
  }
  console.log('Question 7:' + questionSeven + '| Answer:' + answer);
  if (answerSeven) {
    alert ('Congrats! In all, I have lived in Delaware, Florida, Nevada & Georgia.');
  } else {
    alert ('Loser. I have lived in Delaware, Florida, Nevada & Georgia.');
  }
}
seventhQuestion();

alert(userName + ', you scored ' + score + ' out of 7 answers.');
