document.addEventListener("DOMContentLoaded", function () {
  const currentUsername = localStorage.getItem("currentUser");
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const currentUser = users.find(user => user.username === currentUsername);

  if (!currentUser) {
    window.location.href = "login.html";
    return;
  }

  const userSpan = document.querySelector(".user-dropdown span");
  if (userSpan) {
    userSpan.textContent = currentUser.username;
  }
});

const mathQuestions = [
    {
        question: "What is -8 + 5?",
        answers: [
            { text: "-3", correct: true},
            { text: "3", correct: false},
            { text: "-13", correct: false},
            { text: "13", correct: false},
        ]
    },
    {
        question: "Solve 12 - (-4)",
        answers: [
            { text: "8", correct: false},
            { text: "-8", correct: false},
            { text: "16", correct: true},
            { text: "-16", correct: false},
        ]
    },
    {
        question: "Multiply (-6) x 3",
        answers: [
            { text: "18", correct: false},
            { text: "-18", correct: true},
            { text: "9", correct: false},
            { text: "-9", correct: false},
        ]
    },
    {
        question: "Simplify 15/25",
        answers: [
            { text: "1/5", correct: false},
            { text: "3/5", correct: true},
            { text: "5/3", correct: false},
            { text: "10/15", correct: false},
        ]
    },
    {
        question: "Convert 0.8 to a fraction",
        answers: [
            { text: "4/5", correct: false},
            { text: "8/10", correct: false},
            { text: "2/5", correct: false},
            { text: "Both a & b", correct: true},
        ]
    },
    {
        question: "What is 30% of 50?",
        answers: [
            { text: "10", correct: false},
            { text: "15", correct: true},
            { text: "20", correct: false},
            { text: "25", correct: false},
        ]
    },
    {
        question: "Which is a prime number?",
        answers: [
            { text: "12", correct: false},
            { text: "17", correct: true},
            { text: "21", correct: false},
            { text: "27", correct: false},
        ]
    },
    {
        question: "What is the LCM of 5 and 7?",
        answers: [
            { text: "5", correct: false},
            { text: "7", correct: false},
            { text: "35", correct: true},
            { text: "70", correct: false},
        ]
    },
    {
        question: "List the factors of 18:",
        answers: [
            { text: "1, 2, 3, 6, 9, 18", correct: true},
            { text: "2, 3, 6, 9", correct: false},
            { text: "1, 3, 6, 18", correct: false},
            { text: "1, 2, 4, 9, 18", correct: false},
        ]
    },
    {
        question: "Simplify 4x + 3y -x +2y",
        answers: [
            { text: "3x + 5y", correct: true},
            { text: "5x + 5y", correct: false},
            { text: "4x + y", correct: false},
            { text: "3x + y", correct: false},
        ]
    },
    {
        question: "Solve 3x - 7 = 20",
        answers: [
            { text: "9", correct: true},
            { text: "10", correct: false},
            { text: "11", correct: false},
            { text: "12", correct: false},
        ]
    },
    {
        question: "Expand 5(2x - 3)",
        answers: [
            { text: "10x - 3", correct: false},
            { text: "10x - 15", correct: true},
            { text: "7x - 15", correct: false},
            { text: "7x - 8", correct: false},
        ]
    },
    {
        question: "What is the missing angle in a triangle wiith angles 45 degrees and 35 degrees?",
        answers: [
            { text: "60", correct: false},
            { text: "90", correct: false},
            { text: "100", correct: true},
            { text: "180", correct: false},
        ]
    },
    {
        question: "Calculate the area of a rectangle with length 8cm and width 5cm",
        answers: [
            { text: "13cm^2", correct: false},
            { text: "26cm^2", correct: false},
            { text: "40cm^2", correct: true},
            { text: "80cm^2", correct: false},
        ]
    },
    {
        question: "How many sides does a hexagon have?",
        answers: [
            { text: "4", correct: false},
            { text: "5", correct: false},
            { text: "6", correct: true},
            { text: "7", correct: false},
        ]
    },
    {
        question: "Find the mode of: 4, 5, 6, 4, 3, 4, 2",
        answers: [
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ]
    },
    {
        question: "Calculate the mean of: 5, 10, 15, 20",
        answers: [
            { text: "10", correct: false},
            { text: "12.5", correct: true},
            { text: "15", correct: false},
            { text: "17.5", correct: false},
        ]
    },
    {
        question: "On a graph, the independent variable goes on which axis?",
        answers: [
            { text: "x-axis", correct: true},
            { text: "y-axis", correct: false},
            { text: "z-axis", correct: false},
            { text: "none", correct: false},
        ]
    },
    {
        question: "A bag has 3 red and 5 blue marbles. What is P(red)?",
        answers: [
            { text: "3/5", correct: false},
            { text: "3/8", correct: true},
            { text: "5/8", correct: false},
            { text: "5/3", correct: false},
        ]
    },
    {
        question: "Rolling a die, what is P(even number)?",
        answers: [
            { text: "1/6", correct: false},
            { text: "1/2", correct: true},
            { text: "1/3", correct: false},
            { text: "2/3", correct: false},
        ]
    },
];

const englishQuestions = [
    {
        question: "Which sentence has correct capitalisation?",
        answers: [
            { text: "my friend lives in london.", correct: false},
            { text: "My friend lives in London.", correct: true},
            { text: "My Friend lives in london.", correct: false},
            { text: "my Friend lives in London.", correct: false}
        ]
    },
    {
        question: "Where should commas go in this sentence: 'After school I went to the park which was crowded and played football.'",
        answers: [
            { text: "After school, I went to the park, which was crowded, and played football.", correct: true},
            { text: "After school I went, to the park which was crowded, and played football.", correct: false},
            { text: "After school I went to the park which was crowded, and played football.", correct: false},
            { text: "No commas are needed", correct: false}
        ]
    },
    {
        question: "Which sentence is imperative?",
        answers: [
            { text: "Can you pass the salt?", correct: false},
            { text: "The sun was shining brightly.", correct: false},
            { text: "Please close the door.", correct: true},
            { text: "What a beautiful day!", correct: false}
        ]
    },
    {
        question: "What is the best topic sentence for a paragraph about school uniforms?",
        answers: [
            { text: "Many schools have uniforms.", correct: true},
            { text: "Uniforms can be blue or grey.", correct: false},
            { text: "Some students don't like them.", correct: false},
            { text: "I wear a uniform to school.", correct: false}
        ]
    },
    {
        question: "Which transition word shows contrast?",
        answers: [
            { text: "Furthermore", correct: false},
            { text: "However", correct: true},
            { text: "Additionally", correct: false},
            { text: "Moreover", correct: false}
        ]
    },
    {
        question: "What is the setting of a story?",
        answers: [
            { text: "The main problem", correct: false},
            { text: "Where and when it happens", correct: true},
            { text: "The people in the story", correct: false},
            { text: "The lesson it teaches", correct: false}
        ]
    },
    {
        question: "Which part of the plot introduces the characters and setting?",
        answers: [
            { text: "Exposition", correct: true},
            { text: "Climax", correct: false},
            { text: "Resolution", correct: false},
            { text: "Falling action", correct: false}
        ]
    },
    {
        question: "Read this passage: 'The old house creaked in the wind. Tom hesitated before turning the rusty doorknob.' What mood is created?",
        answers: [
            { text: "Joyful", correct: false},
            { text: "Mysterious", correct: true},
            { text: "Boring", correct: false},
            { text: "Romantic", correct: false}
        ]
    },
    {
        question: "What type of text tries to convince the reader?",
        answers: [
            { text: "Narrative", correct: false},
            { text: "Persuasive", correct: true},
            { text: "Informative", correct: false},
            { text: "Descriptive", correct: false}
        ]
    },
    {
        question: "Which text would most likely include facts and statistics?",
        answers: [
            { text: "A fairy tale", correct: false},
            { text: "A news article", correct: true},
            { text: "A poem", correct: false},
            { text: "A diary entry", correct: false}
        ]
    },
    {
        question: "'The trees danced in the wind' is an example of:",
        answers: [
            { text: "Metaphor", correct: false},
            { text: "Simile", correct: false},
            { text: "Personification", correct: true},
            { text: "Alliteration", correct: false}
        ]
    },
    {
        question: "'Her smile was as bright as the sun' is an example of:",
        answers: [
            { text: "Metaphor", correct: false},
            { text: "Simile", correct: true},
            { text: "Personification", correct: false},
            { text: "Onomatopoeia", correct: false}
        ]
    },
    {
        question: "Which sentence contains a metaphor?",
        answers: [
            { text: "The classroom was a zoo.", correct: true},
            { text: "The classroom was like a zoo.", correct: false},
            { text: "The classroom was noisy as a zoo.", correct: false},
            { text: "The classroom reminded me of a zoo.", correct: false}
        ]
    },
    {
        question: "What is the purpose of a conclusion paragraph?",
        answers: [
            { text: "Introduce new ideas", correct: false},
            { text: "Summarise main points", correct: true},
            { text: "Provide evidence", correct: false},
            { text: "Ask questions", correct: false}
        ]
    },
    {
        question: "Which sentence is exclamatory?",
        answers: [
            { text: "Pass me the book.", correct: false},
            { text: "What a great goal!", correct: true},
            { text: "The train arrived late.", correct: false},
            { text: "Is it raining outside?", correct: false}
        ]
    },
    {
        question: "What is the best way to start a narrative story?",
        answers: [
            { text: "With a boring description", correct: false},
            { text: "With a question or exciting action", correct: true},
            { text: "With a list of characters", correct: false},
            { text: "With the ending first", correct: false}
        ]
    },
    {
        question: "Which sentence is correctly punctuated?",
        answers: [
            { text: "\"I'm tired,\" yawned Tom.", correct: true},
            { text: "\"I'm tired\" yawned Tom.", correct: false},
            { text: "\"I'm tired, yawned Tom.\"", correct: false},
            { text: "I'm tired yawned Tom.", correct: false}
        ]
    },
    {
        question: "What does a paragraph need?",
        answers: [
            { text: "One main idea", correct: true},
            { text: "At least five sentences", correct: false},
            { text: "No full stops", correct: false},
            { text: "Only questions", correct: false}
        ]
    },
    {
        question: "Which is NOT a narrative technique?",
        answers: [
            { text: "Character development", correct: false},
            { text: "Plot structure", correct: false},
            { text: "Using bullet points", correct: true},
            { text: "Setting description", correct: false}
        ]
    },
    {
        question: "What makes a good character description?",
        answers: [
            { text: "Listing their age and height", correct: false},
            { text: "Showing their personality through actions", correct: true},
            { text: "Using only adjectives", correct: false},
            { text: "Making them perfect", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const subjectSelection = document.getElementById("subject-selection");
const quizElement = document.getElementById("quiz");
const progressElement = document.getElementById("progress"); 

let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];

function startQuiz(subject) {
    subjectSelection.style.display = "none";
    quizElement.style.display = "block";

    currentQuestions = subject === 'maths' ? mathQuestions : englishQuestions;
    currentQuestionIndex = 0;
    score = 0;

    resetState();
    showQuestion();
    showingScore = false;
}

function showQuestion() {
    resetState();

    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = `${questionNo}. ${currentQuestion.question}`;

    if (progressElement) {
        progressElement.innerText = `Question ${questionNo} of ${currentQuestions.length}`;
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    currentQuestionIndex++;

    nextButton.innerText = "Next";
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${currentQuestions.length}!`;
    nextButton.innerHTML = "Choose Another Subject";  
    nextButton.style.display = "block";
}

function handleNextButton() {
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

let showingScore = false;

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < currentQuestions.length) {
        handleNextButton();
    } else if (!showingScore) {
        showScore();
        showingScore = true;
    } else {
        subjectSelection.style.display = "block";
        quizElement.style.display = "none";
        nextButton.innerText = "Next";
        if (progressElement) progressElement.innerText = "";
        showingScore = false;
    }
});

window.onload = function () {
    subjectSelection.style.display = "block";
    quizElement.style.display = "none";
    nextButton.innerHTML = "Next";
};

function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".user-dropdown");
  const menu = document.getElementById("dropdown-menu");
  if (menu && !dropdown.contains(event.target)) {
    menu.style.display = "none";
  }
});

const userSpan = document.getElementById("username-display");
if (userSpan && currentUser) {
  userSpan.textContent = currentUser.username;
}