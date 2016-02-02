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


//README page

$('#start').on('click', function(evt) {
    console.log(evt, this);
        $('#wholeContainer').addClass('hidden');
        $('#quizContainer').removeClass('hidden');
  });

//QUESTIONS, CHOICES, AND ANSWERS

var questionNumber = [
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
  choices[0][3],
  choices[1][2],
  choices[2][1],
  choices[3][2],
  choices[4][0],
  choices[5][3],
  choices[6][1]
];

//DISPLAY QUESTION

function displayQuestion(quest){
  var questionArea = $('#questions');
  questionArea.html(quest);
}

displayQuestion(questionNumber[2]);

//CLICK EVENT FOR CHOICES

$( "#ch0" ).click(function() {
  alert( "This is choice A" );
});

$( "#ch1" ).click(function() {
  alert( "This is choice B" );
});

$( "#ch2" ).click(function() {
  alert( "This is choice C" );
});

$( "#ch3" ).click(function() {
  alert( "This is choice D" );
});


//Display Choices

function displayChoice (q) {
  for (var i = 0; i < 4; i += 1) {
    console.log(choices[q][i])
  $("#ch"+i).html(choices[q][i]);
  };
}

displayChoice(2);



//CHECK ANSWER

// function checkAnswer (){
// for (var i = 0; i <= questionNumber.length; i+=1) {
//  if (answer === "") {
//     console.log("Pick an answer!")
// } else if (questionNumber[i] === answer[i]) {
//     console.log("Correct!");
//     render();
// } else {
//     console.log("No date for you, boo-boo!");
//     restartGame();
//     }
//   }
// };

// checkAnswer();

// HOW DO I CONNECT THE CHOICE SELECTED WITH THE CORRECT ANSWER
// HOW DO I TIE THAT INTO THE CHECKANSWER function
// HOW DO I MAKE THE RENDER BUTTON SO THAT THE NEXT SCREEN SHOWS






