import guessingGame from './guessWrapper'; 

const game = await guessingGame.createGame();
const guess = await guessingGame.guess(game.id, 'a');
