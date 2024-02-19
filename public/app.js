var questions = [
  {
    question: "Html Stands For ______________",
    options: [
      "Hyper Text Makeup Language",
      "html",
      "Case Cading Style Sheet",
      "Hypertext markup language",
    ],
    correctAns: "Hypertext markup language",
  },
  {
    question: "Css Stands For ______________",
    options: [
      "Casecading Style Sheet",
      "Java",
      "Ram",
      "Hypertext markup language",
    ],
    correctAns: "Casecading Style Sheet",
  },
  {
    question: "Js Stands For ______________",
    options: ["Java Style", "Java Script", "Script", "Script Src"],
    correctAns: "Java Script",
  },
  {
    question: "Dom Stands For ______________",
    options: ["Document Object Model", "html", "Css", "Java"],
    correctAns: "Document Object Model",
  },
  {
    question: "Ram Stands For ______________",
    options: ["Read Only Memory", "Dom", "Random Acccess Memory", "For Pc"],
    correctAns: "Random Acccess Memory",
  },
  {
    question: "Rom Stands For ______________",
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
var resDisp = document.getElementById("result");
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
          class="col-12 text-white text-center bg-black p-3 rounded d-flex justify-content-between align-items-center"
          id="question"
        >
          <span class="fs-3">${questions[qno - 1].question}</span>
          <div ><span id="time" class="fs-5 p-1 bg-danger rounded">Time Left : ${time}</span></div>
          <div class="fs-5 p-1 bg-danger rounded"><span id="q-no">${qno}</span><span>/${totalQuestion}</span></div>
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
    ans.innerHTML += `<div class="col-5 bg-black rounded p-2 border-box option fs-5" onclick="handleNextQuestion(correctAns1,this)">${selAns}</div>`;
  }
  var timeHeading = document.getElementById("time");
  timeHeading.innerHTML = `Time Left : ${time}`;
  interval = setInterval(function () {
    time--;
    timeHeading.innerHTML = `Time Left : ${time}`;
    // console.log(time);
    if (time < 0) {
      handleNextQuestion(correctAns1, this);
    }
  }, 1000);
}

function handleNextQuestion(correctAns, elm) {
  // console.log(elm.innerText);
  console.log(correctAns);
  console.log(elm);
  console.log(elm.innerText);
  // console.log(empty);
  //   console.log(selectedAns);
  clearInterval(interval);
  time = 60;
  qno++;
  if (qno > 6 && correctAns == elm.innerText) {
    marks++;
    console.log(marks);
    main.className = "d-none";
    main2.className = "d-none";
    resDisp.classList.remove("d-none");
    resDisp.innerHTML = `<h2 class="text-center text-black">${marks} Out of ${questions.length} Correct</h2><button class="btn btn-danger text-center" onclick="handleStartAgain()">Start Again</button>`;
  } else if (qno > 6 && correctAns !== elm.innerText) {
    main.className = "d-none";
    main2.className = "d-none";
    resDisp.classList.remove("d-none");
    resDisp.innerHTML = `<h2 class="text-center text-black">Result : ${marks} Out of ${questions.length} Correct</h2><button class="btn btn-danger text-center" onclick="handleStartAgain()">Start Again</button>`;
  } else if (correctAns == elm.innerText) {
    // console.log();
    marks++;
    console.log(marks);
    handleShowQuestion();
  } else {
    console.log("Else");
    handleShowQuestion();
  }
}

function handleStartAgain() {
  qno = 1;
  marks = 0;
  console.log(qno);
  // main.innerHTML = "";
  // main2.innerHTML = "";
  main.classList.remove("d-none");
  main2.classList.remove("d-none");
  resDisp.className = "d-none";

  handleStartQuiz();
}
