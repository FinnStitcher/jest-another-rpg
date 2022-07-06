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

module.exports = Player;