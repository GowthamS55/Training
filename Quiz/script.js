// const questions = [
//     {
//         question: "What is the capital of France?",
//         choices: ["Berlin", "Madrid", "Paris", "Rome"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         choices: ["Earth", "Mars", "Jupiter", "Venus"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "What is the largest mammal in the world?",
//         choices: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
//         correctAnswer: "Blue Whale"
//     },
//     {
//         question: "What is the chemical symbol for water?",
//         choices: ["O2", "H2O", "CO2", "NaCl"],
//         correctAnswer: "H2O"
//     }
// ];
// const question = document.getElementById('question')
// const Answerbtn = document.getElementById('answer-btn')
// const Nextbtn = document.getElementById('next-btn')

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.style.display = "none";
//     showQuestion();
// }

// function showQuestion() {
//     clearAnswers();
//     let currentQuestion = questions[currentQuestionIndex];
//     questionElement.innerText = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

//     currentQuestion.choices.forEach(choice => {
//         const button = document.createElement("button");
//         button.innerText = choice;
//         button.classList.add("btn");
//         button.addEventListener("click", () => checkAnswer(choice));
//         answerButtons.appendChild(button);
//     });
// }

// startQuiz()


const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "What is the chemical symbol for water?",
      choices: ["O2", "H2O", "CO2", "NaCl"],
      correctAnswer: "H2O"
    }
  ];
  
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none"; 
    showQuestion();
  }
  
  function showQuestion() {
    clearAnswerButtons();
  
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
  
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.innerText = choice;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(choice));
      answerButtonsElement.appendChild(button);
    });
  }
  
  function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function clearAnswerButtons() {
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
  
  function showScore() {
    clearAnswerButtons();
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    nextButton.style.display = "none"; // Hide Next button on score display
  }
  
  startQuiz();