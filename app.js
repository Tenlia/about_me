'use strict';

var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

var answer1 = prompt('What\'s Elizabeth\'s name?').toLowerCase();

if(answer1 === 'elizabeth' || answer1 === 'liz') {
  alert('Right! Damn, I thought I got you with that one...');
}else{
  alert('Wrong, Ha! Tricky question, but you did well, I think...');
}

var answer2 = prompt('Did Elizabeth move to Seattle, Washington because of pumas?').toLowerCase();

if(answer2 === 'no' || answer2 === 'n') {
  alert('Correct! Elizabeth moved to Seattle to escape the sun.');
}else{
  alert('Incorrect, Elizabeth moved to Seattle to get away from the unrelenting California sun.');
}

var answer3 = prompt('Can you drop someone(Elizabeth) in a pool to see if they\'ll swim?');

if(answer3 === 'yes' || answer3 === 'y') {
  alert('That\'s right! In-fact, that would Elizabeth\'s primary form of education!');
}else{
  alert('Wrong, of course you can drop something into a pool to see if it\'ll swim. It\'s just not recommended with small children or the elderly.');
}

var answer4 = prompt('Would you trust Elizabeth with your computer?').toLowerCase();

if(answer4 === 'no' || answer4 === 'n') {
  alert('Right! Wait, how\'d I make that the right answer? You\'re supposed to trust me!');
}else{
  alert('Wrong! Wait, no, I meant that to be right! You can trust me with a computer, really!');
}

var answer5 = prompt('Is Elizabeth safe in the sunlight?').toLowerCase();

if(answer5 === 'no' || answer5 === 'n') {
  alert('Correct! The Elizabeth is sensitive to the light. The Sun is her natural enemy.');
}else{
  alert('Incorrect! Don\'t put the Elizabeth in the sun, she will burn like a grape in a microwave.');
}
