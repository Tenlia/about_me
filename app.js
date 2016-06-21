'use strict';

//A general greeting. This should spit their name back out at them when welcoming them.
setTimeout(function(){
  var userName = prompt('Hello there! What is your name?');
  alert('Welcome ' + userName + ' glad you\'re here!');

  //I want to give a total at the end for the user of correct vs incorrect answers.
  var tally = 0;

  //This won't count as a yes-or-no question. But I wanted to do it anyways!
  //Alison functionized this
  function question1(){
    var answer1 = prompt('What\'s Elizabeth\'s name?').toLowerCase();
    if(answer1 === 'elizabeth' || answer1 === 'liz'){
      alert('Right! Damn, I thought I got you with that one...');
      tally++;
    }else{
      alert('Wrong, Ha! Tricky question...');
    }
  };
  question1();

  //Five yes-or-no questions for the labwork.
  //Funcionized by Alison
  function question2(){
    var answer2 = prompt('Did Elizabeth move to Seattle, Washington because of pumas?').toLowerCase();
    if(answer2 === 'no' || answer2 === 'n'){
      alert('Correct! Elizabeth moved to Seattle to escape the evil California sun.');
      tally++;
    }else{
      alert('Incorrect, Elizabeth moved to Seattle to get away from the unrelenting California sun.');
    }
  };
  question2();

  //Alison functionized
  function question3(){
    var answer3 = prompt('Can you drop someone(Elizabeth) in a pool to see if they\'ll swim?').toLowerCase();
    if(answer3 === 'yes' || answer3 === 'y'){
      alert('That\'s right! In-fact, that would be Elizabeth\'s primary form of education!');
      tally++;
    }else{
      alert('Wrong, of course you can drop someone into a pool to see if they\'ll swim. It\'s just not recommended with small children or the elderly.');
    }
  };
  question3();

  //Alison functionized
  function question4(){
    var answer4 = prompt('Would you trust Elizabeth with your computer?').toLowerCase();
    if(answer4 === 'no' || answer4 === 'n'){
      alert('Right! Wait, how\'d I make that the right answer? You\'re supposed to trust me!');
      tally++;
    }else{
      alert('Wrong! Wait, no, I meant that to be right! You can trust me with a computer, really!');
    }
  };
  question4();

  //Alison functionized
  function question5(){
    var answer5 = prompt('Is Elizabeth safe in the sunlight?').toLowerCase();
    if(answer5 === 'no' || answer5 === 'n'){
      alert('Correct! Elizabeth is sensitive to the light. The Sun is her natural enemy.');
      tally++;
    }else{
      alert('Incorrect! Don\'t put Elizabeth in the sun, she will sizzle like a grape in a microwave.');
    }
  };
  question5();

  //just another yes-or-no question. This one needed an answer for 'maybe'.
  function question6(){
    var answer6 = prompt('Is this a yes or no question?').toLowerCase();
    if(answer6 === 'no' || answer6 === 'n'){
      alert('Of course it is! This one was supposed to be easy!');
    }else if(answer6 === 'yes' || answer6 === 'y'){
      alert('Woo, you got it!');
      tally++;
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
  };
  question6();

  //making a question that loops for the false answers(up to 4 tries) while letting the correct answer through.
  //Alison functionized
  function stateQuestion(){
    alert('Okay, let\'s do something else, this time. You can\'t get it wrong because you have multiple tries!');
    var userIncorrect = true;
    var tries = 0;
    while(userIncorrect && tries < 4){
      var answer8 = parseFloat(prompt('How many states has Elizabeth lived in?'));
      if(answer8 === 3){
        alert('Cool, you got it right!');
        userIncorrect = false;
        tally++;
      }else if(answer8 > 3){
        alert('Sorry, that number is too large.');
      }else if(answer8 < 3){
        alert('Sorry, that number is too small.');
      }else{
        alert('That\'s not a number!');
      }
      tries++;
    }
  };
  stateQuestion();
  // Making a question with an array of answers that are all correct. It should have up to 6 tries.
  //Alison functionized this
  var words = false;
  var about = ['place', 'mystical', 'covered', 'clouds', 'home', 'cool', 'new'];
  var turns = 0;
  function wordsQuestion(){
    while(words === false && turns < 6){
      var answer9 = prompt('What is one of the words I used to describe Elizabeth\'s cool new home Seattle, Washington?').toLowerCase();
      for(var j = 0; j < about.length; j++){
        if(answer9 === about[j]){
          words = true;
          alert('That\'s one of the words, you got it right!');
          tally++;
          break;
        }
      }
      if(words !== true){
        alert('That\'s not one of the words.');
        turns++;
      }
    }
    alert('I would have accepted "place","mystical","covered","clouds","home","cool" and "new".');
  };
  wordsQuestion();

  if(tally < 8 && tally > 4){
    alert('You did really well, ' + userName + ', you got ' + tally + ' out of 8 right!');
  }else if(tally < 4 && tally > 0){
    alert('You did okay, ' + userName + ', you got ' + tally + ' out of 8 right.');
  }else if(tally === 8){
    alert('Wow, ' + userName + '! you got all 8 questions right!');
  }else{
    alert('Hmm, okay, ' + userName + ', you got no right answers... out of 8');
  };
}, 500);
