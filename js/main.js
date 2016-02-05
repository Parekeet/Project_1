console.log('hello');

//README page



//QUESTIONS, CHOICES, AND ANSWERS


var level;
var number;
var count;
var counter;
var introSong = new Audio('./assets/dating_intro.mp3')
var boo = new Audio('./assets/dating_boo.mp3')
var dating_shortomg = new Audio('./assets/dating_shortomg.mp3')



var questions = [
  "1. Which is NOT a Girl Scout cookie?",
  "2. Which fruit is the state of Georgia famous for?",
  "3. Kylie Jenner is currently dating  ________.",
  "4. What is an infant whale called?",
  "5. She was looking kinda __ with her __ and __?",
  "6. What is a group of Crows called?",
  "7. Which song is by Wu Tang Clan?",
  "8. What is not a popular dance move?",
  "9. How old is the sun?",
  "10. What is the world's longest river?",
  "11. The King of Hearts does NOT have:________",
  "12. Which state wasn't part of the original 13 colonies?",
  "13. What does DNA stand for?",
  "14. Who played Atticus Finch in 'To Kill a Mockingbird'?",
  "15. What is 2 x 15 + 25 – 54 = ?"
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
  [ "dumb:finger:thumb",
    "cute:hair:pumps",
    "dumb:lapdog:gum",
    "sweet:cookies:treats"
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
  [ "4 Billion y.o.",
    "5 Billion y.o.",
    "4.5 Billion y.o.",
    "100 Million y.o."
  ],
  [ "Yangtze",
    "Nile",
    "Amazon",
    "Colorado"
  ],
  [ "His Hands Showing",
    "A Crown",
    "A Sword",
    "A Mustache"
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
  introSong.pause();
};


function startGame() {
  level = 1;
  number = 0;
  count = 60;
  $('#wholeContainer').addClass('hidden');
  $('#quizContainer').removeClass('hidden');
  render();
  introSong.play();
  introSong.loop = true;
  counter = setInterval(timer, 1000);
};



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
  revealImage(); // reveal the sexy lady
}



//DISPLAY NEXT QUESTION



function nextQuestion() {
  winGame();
  if (number < 15) {
   number++;
  }
}


//CLICK EVENT FOR CHOICES


function checkAnswer(choice) {
  console.log( "This is choice: " + choice );
  if (answers[number] === choice) {
    console.log("Correct!");
    goNextQuestion();
  } else {
    introSong.pause();
    boo.play();
    alert("No money, no honey. Sorry boo-boo, try again!");
    boo.pause();
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




//CHANGING IMAGES FOR EACH LEVEL UP


function revealImage() {
  $('#images2').css('visibility', (number > 4) ? 'visible' : 'hidden'); //IF number is greater than 4, make image
  $('#images3').css('visibility', (number > 9) ? 'visible' : 'hidden');
  $('#images4').css('visibility', (number > 14) ? 'visible' : 'hidden');
};


//WIN GAME

function winGame() {
  if (number === 14){
    number++;
    introSong.pause();
    dating_shortomg.play();
    revealImage();
    alert("Congratulations! You win a date with the lovely Ms. Buscemi!");
    clearInterval(counter);
    setTimeout(function() {
    dating_shortomg.pause();
      restartGame();
    }, 4000);
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




