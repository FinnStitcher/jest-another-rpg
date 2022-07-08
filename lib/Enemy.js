const Character = require("./Character");
const Potion = require("./Potion");

function Enemy(name, weapon) {
	this.name = name;
	this.weapon = weapon;
	this.potion = new Potion();

	this.health = Math.ceil(Math.random() * 10 + 85);
	this.strength = Math.ceil(Math.random() * 5 + 5);
	this.agility = Math.ceil(Math.random() * 5 + 5);
}

Enemy.prototype = Object.create(Character.prototype);
// setting the prototype property of Enemy (and therefore, all future objects using that constructor) to an object
// that object contains all the contents of the prototype of Character

Enemy.prototype.getHealth = function () {
	return `Your enemy now has ${this.health} HP.`;
};

Enemy.prototype.getDescription = function () {
	return `A ${this.name} with a ${this.weapon} appears!`;
};

module.exports = Enemy;
