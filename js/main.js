console.log('hello');

//README page



//QUESTIONS, CHOICES, AND ANSWERS


var level = 1;
var number = 0;
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
}



//DISPLAY NEXT QUESTION



function nextQuestion() {
  if ((questions[number]) > 4) {
    level++; // increzse level
    changeImage1(); // displahy panel
  } else {
    // say sorry and restart
  }
  winGame();
  number++;
}


//CLICK EVENT FOR CHOICES



$( "#ch0" ).click(function() {
  console.log( "This is choice 0" );
    if (answers[number] === 0) {
    console.log("Correct!");
  } else {
    alert("No money, no honey. Sorry boo-boo, try again!");
    restartGame();
  }
});

$( "#ch1" ).click(function() {
  console.log( "This is choice 1" );
    if (answers[number] === 1) {
    console.log("Correct!");
  } else {
    alert("No money, no honey. Sorry boo-boo, try again!");
    restartGame();
  }
});

$( "#ch2" ).click(function() {
  console.log( "This is choice 2" );
    if (answers[number] === 2) {
    console.log("Correct!");
  } else {
    alert("No money, no honey. Sorry boo-boo, try again!");
    restartGame();
  }
});

$( "#ch3" ).click(function() {
  console.log( "This is choice 3" );
  if (answers[number] === 3) {
    console.log("Correct!");
  } else {
    alert("No money, no honey. Sorry boo-boo, try again!");
    restartGame();
  }
});



//NEXT, RESTART, AND START BUTTON



$('#next').on('click', function(evt){
  nextQuestion();
  render();
})


$('#start').on('click', function(evt) {
  console.log(evt, this);
  $('#wholeContainer').addClass('hidden');
  $('#quizContainer').removeClass('hidden');
  render()
});


$('#restart').on('click', function(evt) {
  console.log(evt, this);
  $('#quizContainer').addClass('hidden');
  $('#wholeContainer').removeClass('hidden');
  render()
  });



//RESTART AND START AS FUNCTION FOR WRONG ANSWERS


function restartGame() {
  $('#quizContainer').addClass('hidden');
  $('#wholeContainer').removeClass('hidden');
  render();
  number=0;
};

function startGame() {
  $('#wholeContainer').addClass('hidden');
  $('#quizContainer').removeClass('hidden');
  render();
};

//CHANGING IMAGES FOR EACH LEVEL UP


function changeImage1() {
  var image = document.getElementById('images1');
  if (question[number] > 4) {
    image.src = "assets/eggplant.png";
  }
};


//WIN GAME

function winGame() {
  if (number === 14){
    alert('Congratulations! You win a date with the lovely Ms. B!');
    restartGame();
  }
};


//HOW DO I CHANGE BETWEEN IMAGES
//HOW DO I ADD TIMER
//HOW DO I ADD MUSIC






