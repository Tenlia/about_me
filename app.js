'use strict';

var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

var answer1 = prompt('What\'s Elizabeth\'s name?').toLowerCase();

if(answer1 === 'elizabeth' || answer1 === 'liz') {
  alert('Right! Damn, I thought I got you with that one...');
}else{
  alert('Wrong, Ha! Tricky question, but you did well, I think...');
}
