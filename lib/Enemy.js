const Character = require("./Character");
const Potion = require("./Potion");

class Enemy extends Character {
	constructor(name, weapon) {
        super();
        
		this.name = name;
		this.weapon = weapon;
		this.potion = new Potion();

		this.health = Math.ceil(Math.random() * 10 + 85);
		this.strength = Math.ceil(Math.random() * 5 + 5);
		this.agility = Math.ceil(Math.random() * 5 + 5);
	}

	getHealth() {
		return `Your enemy now has ${this.health} HP.`;
	}

	getDescription() {
		return `A ${this.name} with a ${this.weapon} appears!`;
	}
}

module.exports = Enemy;
