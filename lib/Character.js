function Character () {};

Character.prototype.isAlive = function () {
	if (this.health === 0) {
		return false;
	} else {
		return true;
	}
};

Character.prototype.getAttackValue = function () {
	const min = this.strength - 5;
	const max = this.strength + 5;
	// less places to change the numbers if we want to modify the strength value range or the min/max range

	return Math.ceil(Math.random() * (max - min) + min);
};

Character.prototype.reduceHealth = function (damage) {
	this.health -= damage;

	if (this.health < 0) {
		this.health = 0;
	}
};

module.exports = Character;