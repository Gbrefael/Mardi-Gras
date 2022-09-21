// Questions & Answers
const quizData = [
  {
    question: "Where was the first known carnival celebration?",
    a: "Nice, France",
    b: "New Orleans, USA",
    c: "Rome, Italy",
    d: "Madrid, Spain",
    correct: "a",
  },
  {
    question: "When was the earliest known carnival celebration?",
    a: "1369",
    b: "1834",
    c: "1294",
    d: "1912",
    correct: "c",
  },
  {
    question:
      "What is Mardi Gras called in the United Kingdom, Australia, New Zealand and Canada?",
    a: "Shrove Tuesday",
    b: "Shrove Monday",
    c: "Shrove Wednesday",
    d: "Shrove Sunday",
    correct: "a",
  },
  {
    question: "What is the signature Mardi Gras dessert",
    a: "Queen cake",
    b: "Queen pie",
    c: "Kind pie",
    d: "King cake",
    correct: "d",
  },
  {
    question: "Bacchus is the Roman god of what?",
    a: "Wine",
    b: "Love",
    c: "War",
    d: "Party",
    correct: "a",
  },
  {
    question:
      "How many pounds of beads are thrown during an average New Orleans Mardi Gras celebration?",
    a: "10 million",
    b: "25 million",
    c: "15 million",
    d: "30 million",
    correct: "b",
  },
  {
    question: "What does purple signify during Mardi Gras?",
    a: "Honesty",
    b: "Faith",
    c: "Power",
    d: "Justice",
    correct: "d",
  },
  {
    question:
      "On average, how many people typically visit New Orleans for Mardi Gras every year?",
    a: "5 million",
    b: "1.4 million",
    c: "2 million",
    d: "2.5 million",
    correct: "b",
  },
  {
    question:
      "How many times have Mardi Gras parades been canceled in New Orleans?",
    a: "6",
    b: "10",
    c: "13",
    d: "20",
    correct: "c",
  },
  {
    question: "Mardi Gras beads used to be made of what material?",
    a: "Steel",
    b: "Plastic",
    c: "Paper",
    d: "Glass",
    correct: "d",
  },
];

// Getting all the elements
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer === quizData[currentQuiz].correct) {
    quizData[currentQuiz].style;
    score++;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
        <h3>You answered ${score}/${quizData.length} questions correctly</h3>
        
        <button onclick="location.reload()">Reload</button>`;
  }
});
quiz.style.display = "none";
function openQuiz() {
  quiz.style.display = "block";
}
