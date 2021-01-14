// import functions and grab DOM elements
import { didUserWin, getRandomThrow } from './get-random-throw.js';

const shootButton = document.getElementById('shoot-button');
const matchResult = document.getElementById('match-result');
const winsSpace = document.getElementById('wins');
const losesSpace = document.getElementById('loses');
const drawsSpace = document.getElementById('draws');
const totalSpace = document.getElementById('total');



// initialize state
let wins = 0;
let loses = 0;
let draws = 0;
let total = 0;

// set event listeners to update state and DOM

shootButton.addEventListener('click', () => {
    total++;
    totalSpace.textContent = total;

    const computersChoice = getRandomThrow();
    const checkedRadioButton = document.querySelector('input[type="radio"]:checked');
    const usersChoice = checkedRadioButton.value;
    const result = didUserWin(usersChoice, computersChoice);

    if (result === 'win') {
        wins++;
        matchResult.textContent = 'you win!';
        winsSpace.textContent = wins;
    } else if (result === 'lose') {
        loses++
        matchResult.textContent = 'you lost';
        losesSpace.textContent = loses;
    } else {
        draws++
        matchResult.textContent = 'issa draw';
        drawsSpace.textContent = draws;

    }

});