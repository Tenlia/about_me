'use strict';

var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

var answer1 = prompt('What\'s Elizabeth\'s name?').toLowerCase();

if(answer1 === 'elizabeth' || answer1 === 'liz') {
  alert('Right! Damn, I thought I got you with that one...');
}else{
  alert('Wrong, Ha! Tricky question, but you did well, I think...');
}

var answer2 = prompt('Did The Elizabeth move to Seattle, Washington because of pumas?').toLowerCase();

if(answer2 === 'no' || answer2 === 'n') {
  alert('Correct! The Elizabeth moved to Seattle to escape the evil California sun.');
}else{
  alert('Incorrect, The Elizabeth moved to Seattle to get away from the unrelenting California sun.');
}

var answer3 = prompt('Can you drop someone(Elizabeth) in a pool to see if they\'ll swim?');

if(answer3 === 'yes' || answer3 === 'y') {
  alert('That\'s right! In-fact, that would be The Elizabeth\'s primary form of education!');
}else{
  alert('Wrong, of course you can drop someone into a pool to see if they\'ll swim. It\'s just not recommended with small children or the elderly.');
}

var answer4 = prompt('Would you trust The Elizabeth with your computer?').toLowerCase();

if(answer4 === 'no' || answer4 === 'n') {
  alert('Right! Wait, how\'d I make that the right answer? You\'re supposed to trust me!');
}else{
  alert('Wrong! Wait, no, I meant that to be right! You can trust me with a computer, really!');
}

var answer5 = prompt('Is The Elizabeth safe in the sunlight?').toLowerCase();

if(answer5 === 'no' || answer5 === 'n') {
  alert('Correct! The Elizabeth is sensitive to the light. The Sun is her natural enemy.');
}else{
  alert('Incorrect! Don\'t put The Elizabeth in the sun, she will sizzle like a grape in a microwave.');
}

var answer6 = prompt('Is this a yes or no question?').toLowerCase();

if(answer6 === 'no' || answer6 === 'n') {
  alert('Of course it is! This one was supposed to be easy!');
}else{
  alert('Woo, you got it!');
}
