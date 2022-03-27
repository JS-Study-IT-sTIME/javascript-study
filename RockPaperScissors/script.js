const computer_result = document.getElementById('computer');
const rock_btn = document.getElementById('rock');
const scissors_btn = document.getElementById('scissor');
const paper_btn = document.getElementById('paper');
const result_text = document.getElementById('result_text');
const comp_img = document.getElementById('img');

function computerChoice() {
    let choice = ['rock', 'scissor', 'paper']
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        comp_img.src="images/바위.PNG";
    }
    else if (computerChoice === 1) {
        comp_img.src="images/가위.PNG";
    }
    else if (computerChoice === 2) {
        comp_img.src="images/보.PNG";
    }
    return choice[computerChoice];
}

let userWin = 0;
let compWin = 0;
function game(userChoice) {
    let compChoice = computerChoice();

    if (userChoice === compChoice) {
        userWin = 1;
        compWin = 1;
        resultText();
    }
    else if ((userChoice === 'rock' && compChoice === 'scissor') || 
    (userChoice === 'scissor' && compChoice === 'paper') || 
    (userChoice === 'paper' && compChoice === 'rock')) {
        userWin = 1;
        resultText();
    }
    else if ((userChoice === 'scissor' && compChoice === 'rock') || 
    (userChoice === 'paper' && compChoice === 'scissor') || 
    (userChoice === 'rock' && compChoice === 'paper')) {
        compWin = 1;
        resultText();
    }
}

function resultText() {
    if (userWin === 1 && compWin === 0) {
        result_text.textContent = "이겼습니다😊";
        userWin = 0
    }
    else if (compWin === 1 && userWin === 0) {
        result_text.textContent = "졌습니다😭";
        compWin = 0
    }
    else if (userWin === 1 && compWin === 1) {
        result_text.textContent = "비겼습니다🤔";
        userWin = 0
        compWin = 0
    }
    else {
        result_text.textContent = "비겼습니다.";
    }

    setTimeout(() => {result_text.textContent=""}, 2000)
}

rock_btn.onclick = (e) => {
    let result = game('rock');
}

scissors_btn.onclick = (e) => {
    let result = game('scissors');
}

paper_btn.onclick = (e) => {
    let result = game('paper');
}