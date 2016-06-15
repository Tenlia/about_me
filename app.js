'use strict';

//A general greeting. This should spit their name back out at them when welcoming them.
var userName = prompt('Hello! What is your name?');
alert('Welcome ' + userName + ' glad you\'re here!');

//This won't count as a yes-or-no question. But I wanted to do it anyways!
var answer1 = prompt('What\'s Elizabeth\'s name?').toLowerCase();
if(answer1 === 'elizabeth' || answer1 === 'liz'){
  alert('Right! Damn, I thought I got you with that one...');
}else{
  alert('Wrong, Ha! Tricky question, but you did well, I think...');
}

//Five yes-or-no questions for the labwork.
var answer2 = prompt('Did The Elizabeth move to Seattle, Washington because of pumas?').toLowerCase();
if(answer2 === 'no' || answer2 === 'n'){
  alert('Correct! The Elizabeth moved to Seattle to escape the evil California sun.');
}else{
  alert('Incorrect, The Elizabeth moved to Seattle to get away from the unrelenting California sun.');
}

var answer3 = prompt('Can you drop someone(Elizabeth) in a pool to see if they\'ll swim?');
if(answer3 === 'yes' || answer3 === 'y'){
  alert('That\'s right! In-fact, that would be The Elizabeth\'s primary form of education!');
}else{
  alert('Wrong, of course you can drop someone into a pool to see if they\'ll swim. It\'s just not recommended with small children or the elderly.');
}

var answer4 = prompt('Would you trust The Elizabeth with your computer?').toLowerCase();
if(answer4 === 'no' || answer4 === 'n'){
  alert('Right! Wait, how\'d I make that the right answer? You\'re supposed to trust me!');
}else{
  alert('Wrong! Wait, no, I meant that to be right! You can trust me with a computer, really!');
}

var answer5 = prompt('Is The Elizabeth safe in the sunlight?').toLowerCase();
if(answer5 === 'no' || answer5 === 'n'){
  alert('Correct! The Elizabeth is sensitive to the light. The Sun is her natural enemy.');
}else{
  alert('Incorrect! Don\'t put The Elizabeth in the sun, she will sizzle like a grape in a microwave.');
}

//just another yes-or-no question. This one needed an answer for 'maybe'.
var answer6 = prompt('Is this a yes or no question?').toLowerCase();
if(answer6 === 'no' || answer6 === 'n'){
  alert('Of course it is! This one was supposed to be easy!');
}else if(answer6 === 'yes' || answer6 === 'y'){
  alert('Woo, you got it!');
}else{
  var answer7 = prompt('Wait, did you break my question?').toLowerCase();
  if(answer7 === 'no' || answer7 === 'n'){
    alert('I\'m not entirely sure I can trust that...');
  }else if(answer7 === 'yes' || answer7 === 'y'){
    alert('Okay,just be sure not to do that again...');
  }else{
    alert('Do you have trouble with questions or something?');
  }
}

//making a question that loops for the false answers(up to 3 times) while letting the correct answer through.
alert('Okay, let\'s do something else, this time. You can\'t get it wrong because you have multiple tries!');
var states = false;
var i = 0;
while(states === false && i < 3){
  var answer8 = parseFloat(prompt('How many states has The Elizabeth lived in?'));
  if(answer8 === 3){
    alert('Cool, you got it right!');
    states = true;
  }else if(answer8 > 3){
    alert('Sorry, that number is too large.');
    i++;
  }else if(answer8 < 3){
    alert('Sorry, that number is too small.');
    i++;
  }else{
    alert('That\'s not a number!');
    i++;
  }
}

// Making a question with an array of answers that are all correct. It should have up to 7 tries.
var words = false;
var about = ['place', 'mystical', 'covered', 'clouds', 'nopumas', 'home', 'cool', 'new'];
var j = 0;

while(words === false && j < 7){
  var answer9 = prompt('What are one of the words I used to describe Elizabeth\'s cool new home Seattle, Washington?').toLowerCase();
  for(about[j]; j < about.length; j++){
    if(answer9 === about[j]){
      alert('You\'re absolutely correct!');
      words === true;
    }else{
      alert('Nope! I haven\'t used that word.');
    }
  }
}
