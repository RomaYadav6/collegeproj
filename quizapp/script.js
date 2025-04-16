document.addEventListener("DOMContentLoaded", () => {
  const startbtn = document.getElementById("start-btn");
  const nextbtn = document.getElementById("next-btn");
  const restartbtn = document.getElementById("restart-btn");
  const questioncontainer = document.getElementById("question-container");
  const questiontext = document.getElementById("question-text");
  const resultcontainer = document.getElementById("result-container");
  const choicesList = document.getElementById("choices-list");
  const scoredisplay = document.getElementById("score");
  const submit = document.getElementById("submit-btn");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "George Orwell",
        "Leo Tolstoy",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "How many continents are there on Earth?",
      choices: ["5", "6", "7", "8"],
      answer: "7",
    },
  ];
  let currentquestionindex = 0;
  let score = 0;
  startbtn.addEventListener("click", startquiz);
  nextbtn.addEventListener("click", () => {
    currentquestionindex++;
    if (currentquestionindex < questions.length) {
      showquestions();
    }
    // } else {
    //   nextbtn.classList.add("hidden");
    //   submit.classList.remove("hidden");
    //   submit.addEventListener("click", () => showResults());
    // }
  });
  function startquiz() {
    startbtn.classList.add("hidden");
    resultcontainer.classList.add("hidden");
    questioncontainer.classList.remove("hidden");
    showquestions();
  }
  function showquestions() {
    nextbtn.classList.add("hidden");
    questiontext.textContent = questions[currentquestionindex].question;
    choicesList.innerHTML = "";
    questions[currentquestionindex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }
  function selectAnswer(choice) {
    const correctAnswer = questions[currentquestionindex].answer;
    if (choice === correctAnswer) {
      score++;
    }

    // Check if the current question is the last one
    if (currentquestionindex === questions.length - 1) {
      nextbtn.classList.add("hidden");
      submit.classList.remove("hidden");
      submit.addEventListener("click", () => showResults());
    } else {
      nextbtn.classList.remove("hidden");
    }
  }

  function showResults() {
    questioncontainer.classList.add("hidden");
    resultcontainer.classList.remove("hidden");
    scoredisplay.textContent = `${score} out of ${questions.length}`;
  }
});
