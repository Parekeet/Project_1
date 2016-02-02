console.log('hello');


//QUESTIONS, CHOICES, AND ANSWERS

var questionNumber = [
  "Which is NOT a Girl Scout cookie?",
  "Who was the first president of the US?",
  "Kylie Kardishian is currently dating  ____________.",
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

//GETTING SOMETHING TO SHOW IN MY QUESTIONS BOX

function displayQuestion(quest){
  var questionArea = $('#questions');
  questionArea.html(quest);
}

displayQuestion(questionNumber[0]);

//CLICK EVENT FOR CHOICES
$( "#a" ).click(function() {
  alert( "This is choice A" );
});

$( "#b" ).click(function() {
  alert( "This is choice B" );
});

$( "#c" ).click(function() {
  alert( "This is choice C" );
});

$( "#d" ).click(function() {
  alert( "This is choice D" );
});


//Display Choices
//THIS IS SO WRONG
function displayChoice (choices) {
  {var choiceA = $('#a');
  choiceA.html(choices);}
  {var choiceB = $('#b');
  choiceB.html(choices);}
  {var choiceC = $('#c');
  choiceC.html(choices);}
  {var choiceD = $('#d');
  choiceD.html(choices);}
}

displayChoice(choices[0][0]);

//CHECK ANSWER

// var playersChoice = "";
// var i = 0;
// function checkAnswer () {
//   for (i=0; answer = questions.length; i++){
//     if (playersChoice[i] && questions[i] === answers[i])
//       i++;
//   } else {
//     alert("No date for you, boo-boo!");
//     render();
//   }
// };






