export function getRandomThrow() {

    const randomNumber = Math.round(Math.random() * 3);
    let computersThrow;

    if (randomNumber === 1) {
        computersThrow = 'rock';
        return 'rock'
    } 
    else if (randomNumber === 2) {
        computersThrow = 'paper';
        return 'paper'
    } 
    else if (randomNumber === 3) {
        computersThrow = 'sissors';
        return 'sissors'
    }

    return computersThrow;

}

export function didUserWin(userChoice, computerChoice) {
    if (userChoice === 'rock' && computerChoice === 'rock') {
        return 'draw';
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        return 'draw';
    } else if (userChoice === 'sissors' && computerChoice === 'sissors') {
        return 'draw';
    } else if (userChoice === 'rock' && computerChoice === 'sissors') {
        return 'win';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'sissors' && computerChoice === 'paper') {
        return 'win';
    } else if (userChoice === 'paper' && computerChoice === 'sissors') {
        return 'lose';
    } else if (userChoice === 'sissors' && computerChoice === 'rock') {
        return 'lose';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'lose';
    }
}