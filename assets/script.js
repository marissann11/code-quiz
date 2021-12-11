// Get all required elements from HTML (buttons and boxes etc)
let startButtonEl = document.querySelector("#start-button");
let timerEl = document.querySelector(".timer")
let timeLeft = 75
let clockTick;
let quizBox = document.querySelector(".options")

let questions = [
    {
        questionOne: "question here",
        options: ["option1", "correct", "option3", "option4"],
        correct: "correct"
    },
    {
        questionTwo: "2nd question here",
        options: ["option1", "option2", "correct", "option4"],
        correct: "correct"
    },
    {
        questionThree: "3rd question here",
        options: ["correct", "option2", "option3", "option4"],
        correct: "correct"
    },
    {
        questionFour: "4th question here",
        options: ["option1", "option2", "option3", "correct"],
        correct: "correct"
    },
    {
        questionFive: "5th question here",
        options: ["option1", "correct", "option3", "option4"],
        correct: "correct"
    }

]

// What to do when start quiz button is clicked
startButtonEl.addEventListener("click", function () {
    console.log("button clicked")
    document.getElementById('welcome-box').remove();
    // When start button is clicked, the startTimer function is called and timer appears and begins countdown
    function startTimer () {
        timerEl.textContent = "Time Remaining: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(clockTick);
            alert("Your time is up!")
        }
        timeLeft--;
    } 
    clockTick = setInterval (startTimer, 1000);
    startTimer ();
    firstQuestion ();
});

function firstQuestion () {
    quizBox.textContent = questions[0].questionOne;
    for (let i = 0; i < questions[0].options.length; i++) {
        let quizOption = document.createElement("button");
        quizOption.textContent = questions[0].options[i];
        quizBox.appendChild(quizOption);
        quizOption.addEventListener("click", function(event) {
            if (this.textContent === questions[0].correct) {
                console.log("correct button clicked")
                secondQuestion ();
            }
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

function quizOver () {
    document.querySelector(".options").remove ();
    console.log ("The quiz is over");
    clearInterval(clockTick);
    timerEl.textContent = "Quiz Over!"    
    
}





// Intro page with Welcome to quiz and information, start button.

// Link to view high scores in top left and timer countdown with left in top right (starts with 75 seconds) (setInterval once start is clicked)
// Once start button is click, move into fist quiz box with questions and answers
// One questions must be marked with an if statement (if true: add to score, say "correct" at buttom, no time penalty)
// Else rest of the options, no add to score, 10 second penalty
// Make sure no other questions can be selected after answer is already selected and graded
// Automatically go to next quiz box with time delay function after correct/incorrect has been displayed and score/time is updated
// Either time runs out or questions are all answered- quiz is over 
// Once quiz is done- message saying all done and score given. Box for user to input initials to save high score
// Redirected to page with highscores displayed, kept in localstorage and retrieved and displayed on page
// Option to go back to beginning of site with quiz info and start button displayed
