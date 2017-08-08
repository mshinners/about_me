'use strict';

//Question 1
var questionOne = 'Have I ever lived in a foriegn country?';
var country = prompt(questionOne);
if (country.toLowerCase() === 'yes') {
  alert ('You are Correct! I lived in the Middle East country of Bahrain.');
} else {
  alert('Wrong Answer! I lived in Bahrain for 4 years.');
}
console.log('Question 1:' + questionOne + '| Answer:' + country);

var questionTwo = 'Have I ever walked out of a movie becasue it was so bad?';
var movie = prompt(questionTwo);
if (movie.toLowerCase() === 'yes') {
  alert ('You are Correct! I\'m sorry to say that the movie was "Space Balls"');
} else {
  alert('Wrong Answer! I actually walked out of "Space Balls" the first time I saw it.');
}
console.log('Question 2:' + questionTwo + '| Answer:' + movie);

var questionThree = 'Have I ever had a paranormal experience?';
var ghost = prompt(questionThree);
if (ghost.toLowerCase() === 'no') {
  alert ('You are Correct! While I have heard things I can\'t explain, I wouldn\'t classify that as paranormal.');
} else {
  alert('Wrong Answer! I have never seen things flying through the air.');
}
console.log('Question 3:' + questionThree + '| Answer:' + ghost);

var questionFour = 'Have I ever had a surprise party thrown for me?';
var party = prompt(questionFour);
if (party.toLowerCase() === 'yes') {
  alert ('You are Correct! My wife put one together for my 35th(?) birthday.');
} else {
  alert('Wrong Answer! I had one with a small group of friends when I turned 35.');
}
console.log('Question 4:' + questionFour + '| Answer:' + party);

var questionFive = 'Have I ever lived in a foriegn country?';
var coaster = prompt(questionFive);
if (coaster.toLowerCase() === 'no') {
  alert ('You are Correct! I\'ve remained vommit-free on all amusement rides.');
} else {
  alert('Wrong Answer! That\'s totally gross and I never!');
}
console.log('Question 5:' + questionFive + '| Answer:' + coaster);
