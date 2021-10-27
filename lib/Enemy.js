const Potion = require('../lib/Potion.js');
const Character = require('./Character.js');

class Enemy extends Character {
	constructor(name, weapon) {
		super(name);

		this.weapon = weapon;
		this.potion = new Potion();
	}

	getDescription = function () {
		return `A ${this.name} holding a ${this.weapon} has appeared!`;
	};
}

module.exports = Enemy;
