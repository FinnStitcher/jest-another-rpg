const Character = require("./Character");
const Potion = require("./Potion");

class Enemy extends Character {
	constructor(name, weapon) {
        super(name);
        // call constructor of parent class, Character

		this.weapon = weapon;
		this.potion = new Potion();
	}

	getHealth() {
		return `Your enemy now has ${this.health} HP.`;
	}

	getDescription() {
		return `A ${this.name} with a ${this.weapon} appears!`;
	}
}

module.exports = Enemy;
