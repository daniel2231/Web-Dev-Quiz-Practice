// Basic declarations of score, questions, and choices
let score = 0;
let questions = [
  "What is 1 + 1?",
  "What is 2 + 3?",
  "What is 3 + 7?",
  "What is 9 + 9?",
];
let choices = [
  {
    answer: 1,
    choice1: "2",
    choice2: "4",
    choice3: "5",
    choice4: "7",
  },
  {
    answer: 2,
    choice1: "1",
    choice2: "5",
    choice3: "10",
    choice4: "11",
  },
  {
    answer: 3,
    choice1: "20",
    choice2: "30",
    choice3: "10",
    choice4: "14",
  },
  {
    answer: 4,
    choice1: "12",
    choice2: "20",
    choice3: "27",
    choice4: "18",
  },
];

//Meter array for the meter
let meter = [30, 50, 70, 100];

//Element Declarations for dom elements
let scoreElement = document.querySelector(".score");
let meterElement = document.querySelector(".meter");
let questionPElement = document.querySelector(".question-p");
let firstContainer = document.querySelector(".first-container");
let secondContainer = document.querySelector(".second-container");
let bodyElement = document.querySelector("body");
let childElement = document.querySelector(".child");
let questionElement = document.querySelector(".question");
let choiceElement = document.querySelector(".choices");

let i = 0;

//Function to be called to update the questions
function updatePage() {
  //Check whether if the questions are finished
  if (i > 3) {
    console.log("end");
    firstContainer.parentNode.removeChild(firstContainer);
    secondContainer.parentNode.removeChild(secondContainer);
    bodyElement.innerHTML = `
        <h1 class="result" style="color: #5AA7EB;">Total score: ${score}</h1>
        <a href="quiz.html"><button class="start-btn" >Play Again</button></a>
      `;
    return;
  }
  questionPElement.innerHTML = `Question ${i + 1}/4`;
  meterElement.setAttribute("value", meter[i]);
  scoreElement.innerHTML = score;
  questionElement.innerHTML = questions[i];
  choiceElement.innerHTML = `
    <div class="parent">
        <div class="child1" onclick="checkAnswer(${choices[i].answer}, 1)"><div class="child-inner">A</div>${choices[i].choice1}</div>
        <div class="child2" onclick="checkAnswer(${choices[i].answer}, 2)"><div class="child-inner">B</div>${choices[i].choice2}</div>
        <div class="child3" onclick="checkAnswer(${choices[i].answer}, 3)"><div class="child-inner">C</div>${choices[i].choice3}</div>
        <div class="child4" onclick="checkAnswer(${choices[i].answer}, 4)"><div class="child-inner">D</div>${choices[i].choice4}</div>
    </div>
`;

  i++;
}

//Function to check the answer. It has 2 parameters, the answer for the question and the number of clicked choice
function checkAnswer(ans, clicked) {
  //If the answer is same with the clicked choice
  if (ans === clicked) {
    console.log("Correct");
    let choiceElement = document.querySelector(`.child${ans}`);
    console.log(choiceElement);
    choiceElement.style.backgroundColor = "green";
    score++;
    scoreElement.innerHTML = score;
  } else {
    console.log("Wrong");
    let choiceElement = document.querySelector(`.child${clicked}`);
    choiceElement.style.backgroundColor = "red";
  }
  //Timeout to wait for the background color to change before the page updates
  setTimeout(function () {
    updatePage();
  }, 1000);
}
