const Potion = require('./Potion');

function Enemy(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.potion = new Potion();

    this.health = Math.ceil(Math.random() * 10 + 85);
    this.strength = Math.ceil(Math.random() * 5 + 5);
    this.agility = Math.ceil(Math.random() * 5 + 5);
}

Enemy.prototype.getHealth = function() {
    return `Your health is now ${this.health}.`
};

Enemy.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};

Enemy.prototype.reduceHealth = function(damage) {
    this.health -= damage;

    if (this.health < 0) {
        this.health = 0;
    };
}

Enemy.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
    // less places to change the numbers if we want to modify the strength value range or the min/max range

    return Math.ceil(Math.random() * (max - min) + min);
}

Enemy.prototype.getDescription = function() {
    return `A ${this.name} with a ${this.weapon} appears!`
}

module.exports = Enemy;