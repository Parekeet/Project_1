console.log('hello');

//README page



//QUESTIONS, CHOICES, AND ANSWERS


var level;
var number;
var count;
var counter;

var questions = [
  "Which is NOT a Girl Scout cookie?",
  "Which fruit is the state of Georgia famous for?",
  "Kylie Jenner is currently dating  ____________.",
  "What is an infant whale called?",
  "'Hey Ya' was a song by:",
  "What is a group of Crows called?",
  "Which song is by Wu Tang Clan?",
  "What is not a popular dance move?",
  "What color is Absinthe?",
  "What is the world's longest river?",
  "In a standard deck of cards, which king does NOT have a mustache?",
  "Which state wasn't part of the original 13 colonies?",
  "What does DNA stand for?",
  "Who played Atticus Finch in 'To Kill a Mockingbird'?",
  "What is 2 x 15 + 25 – 54 = ?"
];
var choices = [
  [ "Savannah Smiles",
    "Tagalongs",
    "Thin Mints",
    "Samosas",
  ],
  [ "Orange",
    "Apple",
    "Peach",
    "Cherry"
  ],
  [ "Future",
    "Tyga",
    "Wiz Khalifa",
    "Ray J"
  ],
  [ "Kit",
    "Cria",
    "Calf",
    "Nymph"
  ],
  [ "OutKast",
    "Loners",
    "The Ostracized",
    "Beyonce"
  ],
  [ "Flock",
    "Swarm",
    "Gaggle",
    "Murder"
  ],
  [ "Mo Money Mo Problems",
    "C.R.E.A.M.",
    "Dear Mama",
    "Wind Beneath My Wings"
  ],
  [ "Dab",
    "Dag Mannie",
    "Nae-Nae",
    "Cat Daddy"
  ],
  [ "Blue",
    "Teal",
    "Green",
    "Yellow"
  ],
  [ "Yangtze",
    "Nile",
    "Amazon",
    "Colorado"
  ],
  [ "Spades",
    "Clubs",
    "Diamonds",
    "Hearts"
  ],
  [ "Louisiana",
    "Georgia",
    "New Jersey",
    "Virginia"
  ],
  [ "Deoroxynucliec Acid",
    "Deoxyribonucleic Acid",
    "Dioxynuclear Acid",
    "Dioxitoniclear Acid"
  ],
  [ "Marlon Brando",
    "Gary Cooper",
    "John Barrymore",
    "Gregory Peck"
  ],
  [ "4",
    "2",
    "1",
    "5"
  ]
];
var answers = [
  3,
  2,
  1,
  2,
  0,
  3,
  1,
  1,
  2,
  2,
  3,
  0,
  1,
  3,
  2
];

//DISPLAY QUESTION



function displayQuestion(){
  var questionArea = $('#questions');
  questionArea.html(questions[number]);
}

function displayChoice() {
  for (var i = 0; i < 4; i += 1) {
    console.log(choices[number][i])
    $("#ch"+i).html(choices[number][i]);
  };
}

function render() {
  displayQuestion();
  displayChoice();
  revealImage(); // displahy panel
}



//DISPLAY NEXT QUESTION



function nextQuestion() {
  winGame();
  number++;
}


//CLICK EVENT FOR CHOICES


function checkAnswer(choice) {
  console.log( "This is choice: " + choice );
  if (answers[number] === choice) {
    console.log("Correct!");
    goNextQuestion();
  } else {
    alert("No money, no honey. Sorry boo-boo, try again!");
    restartGame();
  }
}

$( "#ch0" ).click(function() {
  checkAnswer(0);
});

$( "#ch1" ).click(function() {
  checkAnswer(1);
});

$( "#ch2" ).click(function() {
  checkAnswer(2);
});

$( "#ch3" ).click(function() {
  checkAnswer(3);
});


//NEXT, RESTART, AND START BUTTON



function goNextQuestion() {
  nextQuestion();
  render();
}


$('#start').on('click', startGame);


$('#restart').on('click', function(evt) {
  console.log(evt, this);
  $('#quizContainer').addClass('hidden');
  $('#wholeContainer').removeClass('hidden');
  render()
});



//RESTART AND START AS FUNCTION FOR WRONG ANSWERS


function restartGame() {
  clearInterval(counter);
  $('#quizContainer').addClass('hidden');
  $('#wholeContainer').removeClass('hidden');
};

function startGame() {
  level = 1;
  number = 0;
  count = 50;
  $('#wholeContainer').addClass('hidden');
  $('#quizContainer').removeClass('hidden');
  render();
  counter = setInterval(timer, 1000);
};

//CHANGING IMAGES FOR EACH LEVEL UP


function revealImage() {
  $('#images2').css('visibility', (number > 4) ? 'visible' : 'hidden');
  $('#images3').css('visibility', (number > 9) ? 'visible' : 'hidden');
  $('#images4').css('visibility', (number > 14) ? 'visible' : 'hidden');
};


//WIN GAME

function winGame() {
  if (number === 14){
    number++;
    revealImage();
    clearInterval(counter);
    setTimeout(function() {
      alert('Congratulations! You win a date with the lovely Ms. B!');
      restartGame();
    }, 3000);
  }
};


//ADDING TIMER

function timer()
{
  count=count-1;
  if (count <= 0 && number != 14) {
    clearInterval(counter);
    alert("You snooze, you lose! Try again.")
    restartGame();
  }

  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
}



//HOW DO I CHANGE BETWEEN IMAGES
//HOW DO I ADD TIMER
//HOW DO I ADD MUSIC
//GETTING PICTURE TO STAY... POSITION: ABSOLUTE? IS THIS OK?
