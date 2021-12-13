// Get all required elements from HTML and declare global variables
let startButtonEl = document.querySelector("#start-button");
let timerEl = document.querySelector(".timer");
let timeLeft = 75
let clockTick;
let quizBox = document.querySelector(".options");
let score = 0
let highScoresEl = document.querySelector(".high-scores");
let finalForm = document.querySelector(".score-form");
let initials = document.querySelector("#initial");
let submitBtnEl = document.querySelector("#submit-btn");
let savedScores = [];



// Create array of questions so that when quiz starts they can be looped through. Make separate value for each correct answer
let questions = [
    {
        questionOne: "Where should you link your Javascript file in your HTML?",
        options: ["In the head", "Bottom of the body", "Outside the <html> tags", "In the title"],
        correct: "Bottom of the body"
    },
    {
        questionTwo: "What is the correct tag for an external Javascript file?",
        options: ["section", "style", "script", "link"],
        correct: "script"
    },
    {
        questionThree: "How would you call a function called 'thisFunction'",
        options: ["thisFunction ()", "call thisFunction", "call thisFunction ()", "function = thisFunction"],
        correct: "thisFunction ()"
    },
    {
        questionFour: "How do you add a comment in Javascript?",
        options: ["<!--comment-->", "/*comment/", "//comment", "(comment)"],
        correct: "//comment"
    },
    {
        questionFive: "What operator do you use to assign value to a variable?",
        options: ["x", "=", "-", "*"],
        correct: "="
    }
]

// When html is first loaded, the final form where you submit your initials and score is hidden
finalForm.style.display = "none"

// What to do when start quiz button is clicked
startButtonEl.addEventListener("click", function () {
    console.log("button clicked")
    document.getElementById('welcome-box').remove();
    // When start button is clicked, the startTimer function is called and timer appears and begins countdown
    function startTimer () {
        timerEl.textContent = "Time Remaining: " + timeLeft;
        // If timer runs out before user finishes quiz (therefor score is 0, quizOver function is run but without form to input score/initial information)
        if (timeLeft === 0) {
            quizOver ();
            finalForm.style.display = "none"
        }
        timeLeft--;
    } 
    clockTick = setInterval (startTimer, 1000);
    startTimer ();
    firstQuestion ();
});

// Each question function loops through the questions array above and makes buttons for each option
function firstQuestion () {
    quizBox.textContent = questions[0].questionOne;
    for (let i = 0; i < questions[0].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[0].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            // If correct button is clicked, next question function is called
            if (this.textContent === questions[0].correct) {
                console.log("correct button clicked")
                secondQuestion ();
            }
            // If wrong button is clicked, next question function is still called but only after deducting 10 seconds from time left
            else {
                console.log("wrong clicked")
                timeLeft = timeLeft - 10;
                secondQuestion ();
            }
        })
    }
}

function secondQuestion () {
    quizBox.textContent = questions[1].questionTwo;
    for (let i = 0; i < questions[1].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[1].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            if (this.textContent === questions[1].correct) {
                console.log("correct button clicked")
                thirdQuestion ();
            }
            else {
                console.log("wrong clicked")
                thirdQuestion ();
                timeLeft = timeLeft - 10;
            }
        })
    }
}

function thirdQuestion () {
    quizBox.textContent = questions[2].questionThree;
    for (let i = 0; i < questions[2].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[2].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            if (this.textContent === questions[2].correct) {
                console.log("correct button clicked")
                fourthQuestion ();
            }
            else {
                console.log("wrong clicked")
                fourthQuestion ();
                timeLeft = timeLeft - 10;
            }
        })
    }
}

function fourthQuestion () {
    quizBox.textContent = questions[3].questionFour;
    for (let i = 0; i < questions[3].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[3].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            if (this.textContent === questions[3].correct) {
                console.log("correct button clicked")
                fifthQuestion ();               
            }
            else {
                console.log("wrong clicked")
                fifthQuestion ();
                timeLeft = timeLeft - 10;
            }
        })
    }
}

function fifthQuestion () {
    quizBox.textContent = questions[4].questionFive;
    for (let i = 0; i < questions[4].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[4].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            if (this.textContent === questions[4].correct) {
                console.log("correct button clicked")
                quizOver ();
            }
            else {
                console.log("wrong clicked");
                timeLeft = timeLeft - 10;
                quizOver ();
            }
        })
    }
}

// Quiz over function is called after last quiz question is completed, total user score is whatever time is leftover
function quizOver () {
    score = timeLeft
    // Final score is displayed as text content in quiz container
    quizBox.textContent = "Your final score is: " + score;
    console.log ("The quiz is over");
    // Timer interval is cleared and timer turns into message saying that the quiz is done
    clearInterval(clockTick);
    timerEl.textContent = "Quiz Over!"
    // As long as the final score is greater than 0, the user can now access the form in order to input their initials
    if (score > 0) {
        finalForm.style.display = "block";
    }
}

// This function is called when the submit button of the form is clicked
function saveScore () {
    // First make sure to grab any previous high scores from local storage if applicable
    let highScores = JSON.parse(localStorage.getItem("highScores") || "[]");
    // Set initials as value of user input of form (grabbed from html on top of page)
    newScores = {initials: initials.value, score: score};
    // Previous and new high scores all set back to local storage
    highScores.push(newScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

submitBtnEl.addEventListener("click", saveScore)

// This function is not called until the user goes to the high scores page, where it is called immediately
// Credit to Chris Backes for scorePage function
function scorePage() {
    savedScores = JSON.parse(localStorage.getItem("highScores"));
    for (let i = 0; i < savedScores.length; i++) {
      let tableEl = document.querySelector("#score-display");
      let tableRowEl = document.createElement("tr");
      let tableHeadOneEl = document.createElement("th");
      let tableHeadTwoEl = document.createElement("th");
      tableEl.appendChild(tableRowEl);
      tableHeadOneEl.textContent = savedScores[i].initials;
      tableRowEl.appendChild(tableHeadOneEl);
      tableHeadTwoEl.textContent = savedScores[i].score;
      tableRowEl.appendChild(tableHeadTwoEl);
    }
  }