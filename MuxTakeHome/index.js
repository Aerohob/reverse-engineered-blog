const fetch = require('isomorphic-unfetch');

// Init basic class with API URL
class GuessingGame {
	constructor(config) {
		this.basePath = 'https://word-guessing-game.onrender.com/';
	}

	request(endpoint = '', options = {}) {
		let url = this.basePath + endpoint;

		let headers = {
			'Content-type': 'application/json'
		};

		let config = {
			...options,
			...headers
		};

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
		//Returns the current state of the game.
		let url = '/' + id;
		return this.request(url, {});
	}
	guessLetter(id, letter) {
		// Must be a single letter
    let url = '/' + id + letter;
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

export default GuessingGame;