// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './get-random-throw.js';

const shootButton = document.getElementById('shoot-button');
const matchResult = document.getElementById('match-result');
const winsSpace = document.getElementById('wins');
const losesSpace = document.getElementById('loses');
const drawsSpace = document.getElementById('draws');
const totalSpace = document.getElementById('total');
const totalResetsSpan = document.getElementById("total-resets");



// initialize state
let wins = 0;
let loses = 0;
let draws = 0;
let total = 0;
let totalResets = 0;

// set event listeners to update state and DOM

shootButton.addEventListener('click', () => {
    total++;
    totalSpace.textContent = total;

    const computersChoice = getRandomThrow();
    const checkedRadioButton = document.querySelector('input[type="radio"]:checked');
    const usersChoice = checkedRadioButton.value;
    const result = didUserWin(usersChoice, computersChoice);

    if (result === 'win') {onWin()} 
    else if (result === 'lose') {onLoss()} 
    else {onDraw()}

});

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    wins = 0;
    loses = 0;
    draws = 0;
    total = 0;
    
    winsSpace.textContent = wins;
    losesSpace.textContent = loses;
    setDrawSpan();
    totalSpace.textContent = total;
    totalResets++;
    totalResetsSpan.textContent = totalResets;
 
});

function setDrawSpan(){
    drawsSpace.textContent = draws;

}

function onWin(){
    wins++;
    matchResult.textContent = 'you win!';
    winsSpace.textContent = wins;
}
function onLoss(){
    loses++
    matchResult.textContent = 'you lost';
    losesSpace.textContent = loses;
}

function onDraw(){
    draws++
    matchResult.textContent = 'issa draw';
    setDrawSpan();
}
