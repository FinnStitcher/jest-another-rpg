const Potion = require('../lib/Potion');

function Player(name = '') {
    // name will default to an empty string if none is provided
    this.name = name;

    this.health = Math.ceil(Math.random() * 10 + 95);
    // 95 to 105
    this.strength = Math.ceil(Math.random() * 5 + 7);
    this.agility = Math.ceil(Math.random() * 5 + 7);
    // 7 to 12

    this.inventory = [new Potion('health'), new Potion()];
};

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

Player.prototype.getInventory = function() {
    if (this.inventory.length) {
        return this.inventory;
    };
    return false;
};

Player.prototype.getHealth = function() {
    return `Your health is now ${this.health}.`
};

Player.prototype.isAlive = function() {
    if (this.health === 0) {
        return false;
    } else {
        return true;
    }
};

Player.prototype.reduceHealth = function(damage) {
    this.health -= damage;

    if (this.health < 0) {
        this.health = 0;
    };
}

Player.prototype.getAttackValue = function() {
    const min = this.strength - 5;
    const max = this.strength + 5;
    // less places to change the numbers if we want to modify the strength value range or the min/max range

    return Math.ceil(Math.random() * (max - min) + min);
}

Player.prototype.addPotion = function(potion) {
    this.inventory.push(potion);
};

Player.prototype.usePotion = function(index) {
    const potion = this.getInventory().splice(index, 1)[0];
    // getInventory() is run to fetch the inventory
    // splice() is run with numbers telling it to remove 1 item at the specified index, which will be returned as a new array
    // the [0] at the end says to put the first (only) item in the array returned by splice() into the variable "potion"

    switch (potion.name) {
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
}

module.exports = Player;