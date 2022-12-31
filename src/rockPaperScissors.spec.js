import { game, GAME_RESULTS, GAME_WORDS } from "./rockPaperScissors";

describe('RockPaperScissors game', () => {
  test('should return a draw if player one and two choose Rock', () => {
    const playerOne = GAME_WORDS.rock;
    const playerTwo = GAME_WORDS.rock;
    const expectedResult = GAME_RESULTS.draw;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return a draw if player one and two choose Paper', () => {
    const playerOne = GAME_WORDS.paper;
    const playerTwo = GAME_WORDS.paper;
    const expectedResult = GAME_RESULTS.draw;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return a draw if player one and two choose Scissors', () => {
    const playerOne = GAME_WORDS.scissors;
    const playerTwo = GAME_WORDS.scissors;
    const expectedResult = GAME_RESULTS.draw;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player Two wins if player one choose Rock and player two choose Paper', () => {
    const playerOne = GAME_WORDS.rock;
    const playerTwo = GAME_WORDS.paper;
    const expectedResult = GAME_RESULTS.playerTwoWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player Two wins if player one choose Paper and player two choose Scissors', () => {
    const playerOne = GAME_WORDS.paper;
    const playerTwo = GAME_WORDS.scissors;
    const expectedResult = GAME_RESULTS.playerTwoWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player Two wins if player one choose Scissors and player two choose Rock', () => {
    const playerOne = GAME_WORDS.scissors;
    const playerTwo = GAME_WORDS.rock;
    const expectedResult = GAME_RESULTS.playerTwoWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player One win if player two choose Rock and player two choose Scissors', () => {
    const playerOne = GAME_WORDS.rock;
    const playerTwo = GAME_WORDS.scissors;
    const expectedResult = GAME_RESULTS.playerOneWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player One win if player two choose Rock and player two choose Scissors', () => {
    const playerOne = GAME_WORDS.paper;
    const playerTwo = GAME_WORDS.rock;
    const expectedResult = GAME_RESULTS.playerOneWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
  test('should return Player One win if player two choose Scissors and player two choose Paper', () => {
    const playerOne = GAME_WORDS.scissors;
    const playerTwo = GAME_WORDS.paper;
    const expectedResult = GAME_RESULTS.playerOneWins;
    //ACT
    const resp = game(playerOne, playerTwo);
    //ASSERT
    expect(resp).toBe(expectedResult);
  });
});
