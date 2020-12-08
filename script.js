function computerPlay() {
    let cselection = Math.floor(Math.random() * 3) + 1;
    // console.log(`cselection ${cselection}`);
    return cselection;
}

function playerPlay(className) {
    let pselection = className;
    return Number(pselection);
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection){
        case 1:
            if (computerSelection == 1) {return 0;}
            if (computerSelection == 2) {return -1;}
            if (computerSelection == 3) {return 1;}
        case 2: 
            if (computerSelection == 2) {return 0;}
            if (computerSelection == 3) {return -1;}
            if (computerSelection == 1) {return 1;}
        case 3: 
            if (computerSelection == 3) {return 0;}
            if (computerSelection == 1) {return -1;}
            if (computerSelection == 2) {return 1;}
    }
}
let us = 0;
let them = 0;

let scores = document.querySelector('.scores');

let cScore = scores.querySelector('.cScore');
let cDisplay = cScore.querySelector('.cDisplay');

let mScore = scores.querySelector('.mScore');
let mDisplay = mScore.querySelector('.mDisplay');

let result = document.querySelector('.result');

function afterClick(className) {
    let pselection = playerPlay(className);
    let cselection = computerPlay();
    // console.log(pselection);

    let roundResult = playRound(pselection, cselection);
    if (roundResult == -1) {
        them++;
        cDisplay.textContent = them;
        if (them == 5) {
            them = 0;
            us = 0;
            result.textContent = `We lost :(`;
        }
    } else if (roundResult == 1) {
        us++;
        mDisplay.textContent = us;
        if (us == 5) {
            them = 0;
            us = 0;
            result.textContent = `We won :)`;
        }
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