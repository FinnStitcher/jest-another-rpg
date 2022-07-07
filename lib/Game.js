const inquirer = require('inquirer');

const Player = require('./Player');
const Enemy = require('./Enemy');

function Game() {
    this.player = null;
    this.enemies = [];
    this.currentEnemy = null;
    this.isPlayerTurn = false;
    this.roundNumber = 0;
};

Game.prototype.initializeGame = function() {
    // initialize run of enemies
    this.enemies.push(new Enemy('zombie', 'sword'), new Enemy('orc', 'baseball bat'), new Enemy('skeleton', 'axe'));

    this.currentEnemy = this.enemies[0];

    // prompt player to create player character
    inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    })
    .then(({ name }) => {
        // arrow function is required here so make sure "this" refers to the Game object :)
        this.player = new Player(name);

        this.startNewBattle();
    })
}

module.exports = Game;