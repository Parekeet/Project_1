console.log('hello');

// var questionsAnswered = [
//   [""],
//   [""],
//   [""],
//   [""],
//   [""],
//   [""],
//   [""]
// ];

var playersChoice = "";

//README page



//QUESTIONS, CHOICES, AND ANSWERS

var number = 0;
var questions = [
  "Which is NOT a Girl Scout cookie?",
  "Who was the first president of the US?",
  "Kylie Jenner is currently dating  ____________.",
  "Who discovered gravity?",
  "'Hey Ya' was a song by:",
  "What is a group of Crows called?",
  "What is the most common last name in the world?"
];
var choices = [
  [ "Savannah Smiles",
    "Tagalongs",
    "Thin Mints",
    "Samosas",
  ],
  [ "George Bush",
    "Washington Jacksons",
    "George Washington",
    "Abraham Washington"
  ],
  [ "Future",
    "Tyga",
    "Wiz Khalifa",
    "Ray J"
  ],
  [ "Albert Einstein",
    "Phil",
    "Newton",
    "Bill Nye the Science Guy"
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
  [ "Smith",
    "Chen",
    "Kim",
    "Chang"
  ]
];
var answers = [
  3,
  2,
  1,
  2,
  0,
  3,
  1
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

function nextQuestion() {
  number++;
}


//CLICK EVENT FOR CHOICES

$( "#ch0" ).click(function() {
  console.log( "This is choice 0" );
    if (answers[number] === 0) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
});

$( "#ch1" ).click(function() {
  console.log( "This is choice 1" );
    if (answers[number] === 1) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
});

$( "#ch2" ).click(function() {
  console.log( "This is choice 2" );
    if (answers[number] === 2) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
});

$( "#ch3" ).click(function() {
  console.log( "This is choice 3" );
  if (answers[number] === 3) {
    console.log("Correct!");
  } else {
    console.log("Wrong!");
  }
});


//Display Choices

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





// HOW DO I CONNECT THE CHOICE SELECTED WITH THE CORRECT ANSWER
// HOW DO I TIE THAT INTO THE CHECKANSWER function
// HOW DO I MAKE THE RENDER BUTTON SO THAT THE NEXT SCREEN SHOWS






