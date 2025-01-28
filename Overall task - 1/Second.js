const questions = [
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      { answer: "pop()", isCorrect: true },
      { answer: "shift()", isCorrect: false },
      { answer: "push()", isCorrect: false },
      { answer: "unshift()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method is used to join all elements of an array into a string?",
    options: [
      { answer: "join()", isCorrect: true },
      { answer: "concat()", isCorrect: false },
      { answer: "slice()", isCorrect: false },
      { answer: "splice()", isCorrect: false },
    ],
  },
  {
    question:
      "Which method creates a new array with all elements that pass a test?",
    options: [
      { answer: "filter()", isCorrect: true },
      { answer: "map()", isCorrect: false },
      { answer: "reduce()", isCorrect: false },
      { answer: "forEach()", isCorrect: false },
    ],
  },
  {
    question: "Which of the following is not a valid JavaScript data type?",
    options: [
      { answer: "Number", isCorrect: false },
      { answer: "String", isCorrect: false },
      { answer: "Float", isCorrect: true },
      { answer: "Boolean", isCorrect: false },
    ],
  },
  {
    question: "What will the following code output: `console.log(3 + '3')`?",
    options: [
      { answer: "33", isCorrect: true },
      { answer: "6", isCorrect: false },
      { answer: "NaN", isCorrect: false },
      { answer: "Error", isCorrect: false },
    ],
  },
];
const quizContainer = document.getElementById('quiz-container');

const quizques = questions.map((q, index) => `
<div class="question">
    <strong>${index + 1}. ${q.question}</strong>

    <div class="options">
        ${q.options.map(option => `
            <label>
                <input type="radio" name="question${index}" value="${option.answer}">
                ${option.answer}
            </label><br>
        `).join('')}
        
    </div>
</div>
`).join('');

quizContainer.innerHTML = quizques; 

document.getElementById('submit-btn').addEventListener('click', () => {
  let score = 0;
  const selectedAnswers = [];
  questions.forEach((q, index) => {
      const selectedOption = document.querySelector(
          `input[name="question${index}"]:checked`
      );

      const correctAnswers = q.options.filter(option => option.isCorrect);
      

      if (selectedOption && selectedOption.value === correctAnswers[0].answer) {
          score++;
      }
  });

  document.getElementById('result').innerText = `Your score is ${score} out of ${questions.length}`;
});