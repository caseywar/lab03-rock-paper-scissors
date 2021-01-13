// import functions and grab DOM elements
import { getRandomThrow } from './get-random-throw.js';

const shootButton = document.getElementById('shoot-button');
const matchResult = document.getElementById('match-result');
const winsSpace = document.getElementById('wins');
const losesSpace = document.getElementById('loses');
const totalSpace = document.getElementById('total');



// initialize state
let wins = 0;
let total = 0;

// set event listeners to update state and DOM

shootButton.addEventListener('click', () => {
    total++;

    //     1)store what the computer shot
    //     -need a 'computer shoot' that lands randomly on RPS (1,2,3)
    const computersShoot = Math.round(Math.random() * 3);
    //     -math.round(Math.random()*3) will go between 1 and 3
    const computerRockPaperSissors = getRandomThrow(computersShoot);
    //     -make 1 rock and 2 paper 3 sissors

    // 2)store the user shoot
    //     -grab the checked input and get its value
    const selectedRadioInput = document.querySelector('input[type="radio"]:checked');

    const usersShoot = selectedRadioInput.value;
    // 3)compare the user shoot to computer shoot
    if (usersShoot === computerRockPaperSissors) {
        matchResult.textContent = 'DRAW';
    }

    // 4)display the result of the match

})