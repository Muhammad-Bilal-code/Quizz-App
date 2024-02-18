var questions = [
  {
    question: "Html Stands For",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For",
    options: ["Hyper Text Markup Language", "html", "HTml", "Read Only Memory"],
    correctAns: "Read Only Memory",
  },
];

var time = 60;

// console.log(timeHeading);
var interval;
var totalQuestion = questions.length;
var qno = 1;
var main = document.getElementById("main");
var main2 = document.getElementById("main2");
var start = document.getElementById("start");
var qns = document.getElementById("qns");
var selAns;
var correctAns1;
var marks = 0;
function handleStartQuiz() {
  console.log("Start Quizz");
  start.classList.add("d-none");
  //   qns.classList.remove("d-none");
  handleShowQuestion();
}

function handleShowQuestion() {
  main.innerHTML = `<div class="row d-flex justify-content-center mt-5" id="qns">
    <div class="col-8 d-flex flex-column gap-3">
    
    <div class="row">
        <div
          class="col-12 text-white text-center bg-black p-3 rounded d-flex justify-content-between"
          id="question"
        >
          <span>${questions[qno - 1].question}</span>
          <div><span id="time">Time Left : ${time}</span></div>
          <div><span id="q-no">${qno}</span><span>/${totalQuestion}</span></div>
        </div>
      </div>
    </div>
  </div>`;

  main2.innerHTML = `<div
    class="row text-white gap-2 d-flex flex-wrap justify-content-center"
    id="ans"
  >  
  </div>`;
  var ans = document.getElementById("ans");
  correctAns1 = questions[qno - 1].correctAns;
  //   console.log(correctAns);
  for (i = 0; i < questions[qno - 1].options.length; i++) {
    // console.log(questions[qno - 1].options[i]);
    selAns = questions[qno - 1].options[i];
    ans.innerHTML += `<div class="col-5 bg-black rounded p-2 border-box" onclick="handleNextQuestion(correctAns1,selAns)">${selAns}</div>`;
  }
  var timeHeading = document.getElementById("time");
  timeHeading.innerHTML = time;
  interval = setInterval(function () {
    time--;
    timeHeading.innerHTML = time;
    // console.log(time);
    if (time == 0) {
      handleNextQuestion();
    }
  }, 1000);
}

function handleNextQuestion(correctAns, selectedAns) {
  console.log(correctAns);
  console.log(selectedAns);
  clearInterval(interval);
  time = 60;
  qno++;
  if (qno > 6) {
    console.log("Quizz And");
    console.log(marks);
  } else if (correctAns === selectedAns) {
    // console.log();
    marks++;
    console.log(marks);
    handleShowQuestion();
  } else {
    handleShowQuestion();
  }
}
