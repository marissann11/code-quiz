// Get all required elements from HTML (buttons and boxes etc)
let startButtonEl = document.querySelector("#start-button");
let timerEl = document.querySelector(".timer")
let timeLeft = 10
let clockTick;

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
    let quizQuestion = document.querySelector("#quiz-container");
    quizQuestion.textContent = "This is a question about javascript?";
    let quizOptions = document.querySelector(".quiz-options")
    let optionOne = document.createElement("button");
    let optionTwo = document.createElement("button");
    let optionThree = document.createElement("button");
    let optionFour = document.createElement("button");
    optionOne.textContent = "First option";
    optionTwo.textContent = "Second option";
    optionThree.textContent = "Third option";
    optionFour.textContent = "Fourth option";
    quizOptions.appendChild(optionOne);

}


// Hide start button and quiz info and go into first quiz box

// Create an array with questions and possible answers, number question options and answer diff values in each array (??)
// For loop through array until no more questions, text for Q and text for option list in innerHTML or textContent

// Function for if next button is clicked (if next button) --> iterate through array above, else --> quiz completed

// If correct answer chosen, "Correct!" appears below, else "Incorrect" appears
// Function for score if wrong vs if right -- to local storage


// Intro page with Welcome to quiz and information, start button.
// Welcome to your JavaScript Fundamentals quiz! You will have 75 seconds total to answer the following () questions. For every wrong
// Answer you will be penalized by 10 seconds. Good luck!
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
