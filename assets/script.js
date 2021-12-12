// Get all required elements from HTML (buttons and boxes etc)
let startButtonEl = document.querySelector("#start-button");
let timerEl = document.querySelector(".timer")
let timeLeft = 75
let clockTick;
let quizBox = document.querySelector(".options")
let score = 0
let highScoresEl = document.querySelector(".high-scores")
let finalForm = document.querySelector(".score-form")

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

finalForm.style.display = "none"

// What to do when start quiz button is clicked
startButtonEl.addEventListener("click", function () {
    console.log("button clicked")
    document.getElementById('welcome-box').remove();
    // When start button is clicked, the startTimer function is called and timer appears and begins countdown
    function startTimer () {
        timerEl.textContent = "Time Remaining: " + timeLeft;

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
    score = timeLeft
    quizBox.textContent = "Your final score is: " + score;
    console.log ("The quiz is over");
    clearInterval(clockTick);
    timerEl.textContent = "Quiz Over!"
    saveScore ();
}

function saveScore () {
    finalForm.style.display = "block";
    let allScores = []
    function loadPrevious() {
        let savedScores = JSON.parse(localstorage.getItem("highScores"));
        if (!savedScores) {
            return false;
        }
        for (let i = 0; j < savedScores.length; i++) {
            allScores.push(savedScores[i])
        }
    }
    loadPrevious ();
    let initials = document.querySelector("#initial").value;
    let newScore = {
        inital: initials,
        score: score,
    };
    allScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(allScores));
}



// function loadScores() {
//     let previousScores = localStorage.getItem("scores");
//     if (!previousScores) {
//       return false;
//     }
//     previousScores = JSON.parse(previousScores);
//     allScores.push(previousScores);
//     console.log(allScores);
//   }

// function saveScore () {
//     finalForm.style.display = "block";
//     let initials = document.querySelector("#iniital").value;
//     let previousScores = localStorage.getItem("highScores");
//     if (!previousScores) {
//         return false;
//     }
//     else {
//         previousScores = JSONparse(previousScores);
//     }
// }

// function saveScore () {
//     finalForm.style.display = "block"
//     let initials = document.querySelector("#initial").value;
//     console.log(initials)
//     newScore = {initials: initials, score: score};
//     localStorage.setItem("newScore", JSON.stringify(newScore));
// }

// function loadScores () {
//     let  = localStorage.getItem("newScore");
//     highScoresEl = JSON.parse(highScoresEl);
//     highScoresEl.push(newScore);
// }
    // newScore = JSON.parse(localStorage.getItem("newScore"));

    // let highScoresEl = JSON.parse(localStorage.getItem("highScoresEl")) || [];
    // highScoresEl.push(newScore);


