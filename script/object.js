const questions = [
  {
    category: "Science",
    question: "What is the chemical symbol for Gold?",
    choices: ["Ag", "Au", "Fe"],
    answer: "Au"
  },
  {
    category: "Geography",
    question: "Which is the largest continent?",
    choices: ["Africa", "Asia", "Europe"],
    answer: "Asia"
  },
  {
    category: "Technology",
    question: "Who is known as the father of the computer?",
    choices: ["Alan Turing", "Charles Babbage", "Steve Jobs"],
    answer: "Charles Babbage"
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    category: "General Knowledge",
    question: "How many colors are in a rainbow?",
    choices: ["5", "7", "9"],
    answer: "7"
  }
];
// Returns a random object from the questions array
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

// Returns a random choice from a specific question's choices array
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

// Compares the choice to the answer and returns a result string
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}
// 1. Get a random question object
const selectedQuestion = getRandomQuestion(questions);

// 2. Get the computer's guess from that question's choices
const computerGuess = getRandomComputerChoice(selectedQuestion.choices);

// 3. Log the results
console.log(`Category: ${selectedQuestion.category}`);
console.log(`Question: ${selectedQuestion.question}`);
console.log(`Computer guessed: ${computerGuess}`);
console.log(getResults(selectedQuestion, computerGuess));