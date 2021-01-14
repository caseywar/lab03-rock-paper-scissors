// IMPORT MODULES under test here:
import { getRandomThrow, didUserWin } from '../utils.js';

const test = QUnit.test;

test('it should return rock when given a 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('test should determine that player won when player plays rock and computer plays sissors', (expect) => {
    const player = 'rock';
    const computer = 'sissors';

    const result = didUserWin(player, computer);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal('win', result);
});
