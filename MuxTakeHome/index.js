const fetch = require('isomorphic-unfetch');

// Init basic class with API URL
class guessingGame {
	constructor(config) {
		this.basePath = 'https://word-guessing-game.onrender.com/';
	}
//Define path + empty string as endpoint
	request(endpoint = '', options = {}) {
		let url = this.basePath + endpoint;
//Set headers
		let headers = {
			'Content-type': 'application/json'
		};
//Add config
		let config = {
			...options,
			...headers
		};
//Add return statement & error handling
		return fetch(url, config).then((r) => {
			if (r.ok) {
				return r.json();
			}
			throw new Error(r);
		});
	}

	createGame() {
		//Create a new game
		//Returns a game object that includes an id, and a key that contains the number of blanks.
		let url = '/';
		let config = {
			method: 'POST'
		};
		return this.request(url, config);
	}
	retrieveGame(id) {
    //Returns the current state of the game
    //Pass the game id in as a parameter
		let url = `/${id}`;
		return this.request(url, {});
	}
	guessLetter(id, letter) {
    //Guesses a letter for the game
    //Pass the game id and desired letter in as parameters
    let url = `/${id}/${letter}`;
    let config = {
			method: 'PUT'
		};
		return this.request(url, config);
	}
	getAllWords() {
		// Returns the array of words we use when generating a new game.
		let url = '/words';
		return this.request(url, {});
	}
}

export default guessingGame;