// IMPORT MODULES under test here:
import { makeRockPaperSissors } from '../utils.js';

const test = QUnit.test;

test('it should return rock when given a 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperSissors(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return paper when given a 2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperSissors(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('it should return sissors when given a 3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'sissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = makeRockPaperSissors(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});