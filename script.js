// computer random a number, which corresponds to rock/paper/scissors
function computerPlay() {
    // 1 = "rock", 2 = "paper", 3 = "scissors"
    let cselection = Math.floor(Math.random() * 3) + 1;
    // this line is to check what the computer random
    console.log(`cselection ${cselection}`);
    return cselection;
}

function playerPlay(className) {
    let pselection = className;
    return pselection;
}

function playRound(playerSelection, computerSelection) {
    let tie = `You tied.`;
    let lost = `You lost.`;
    let won = `You won.`;
    // check the cases when won/lost/tied
    switch(playerSelection){
        case 1:
            if (computerSelection == 1) {return tie;}
            if (computerSelection == 2) {return lost;}
            if (computerSelection == 3) {return won;}
        case 2: 
            if (computerSelection == 2) {return tie;}
            if (computerSelection == 3) {return lost;}
            if (computerSelection == 1) {return won;}
        case 3: 
            if (computerSelection == 3) {return tie;}
            if (computerSelection == 1) {return lost;}
            if (computerSelection == 2) {return won;}
    }
}
let us = 0;
let them = 0;

let result = document.querySelector('.result');

let scores = document.querySelector('.scores');

let cScore = scores.querySelector('.cScore');
let cDisplay = cScore.querySelector('.cDisplay');

let mScore = scores.querySelector('.mScore');
let mDisplay = mScore.querySelector('.mDisplay');

function afterClick(className) {
    let pselection = playerPlay(Number(className));
    let cselection = computerPlay();

    console.log(pselection);

    let roundResult = playRound(pselection, cselection);
    if (roundResult == `You lost.`) {
        them++;
        cDisplay.textContent = them;
    } else if (roundResult == `You won.`) {
        us++;
        mDisplay.textContent = us;
    }

    if (us == 5) {
        result.textContent = `We won :)`;
        us = 0; 
        them = 0;
    } else if (them == 5) {
        result.textContent = `We lost :(`;
        them = 0;
        us = 0;
    }
}

// all buttons will have the same function, they just give different results
let buttons = document.querySelectorAll('button');
// for each button, when it is clicked...
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        afterClick(button.className)
    })
})