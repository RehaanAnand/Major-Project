const questions = [
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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();