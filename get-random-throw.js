export function getRandomThrow() {

    const randomNumber = Math.round(Math.random() * 3);
    let computersThrow;

    if (randomNumber === 1) {
        computersThrow = 'rock';
    } else if (randomNumber === 2) {
        computersThrow = 'paper';
    } else if (randomNumber === 3) {
        computersThrow = 'sissors';
    }

    return computersThrow;

}

// export function didUserWin