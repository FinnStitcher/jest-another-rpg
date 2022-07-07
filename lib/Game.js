const inquirer = require("inquirer");

const Player = require("./Player");
const Enemy = require("./Enemy");

function Game() {
	this.player = null;
	this.enemies = [];
	this.currentEnemy = null;
	this.isPlayerTurn = false;
	this.roundNumber = 0;
}

Game.prototype.battle = function () {
	// if player turn
	// prompt user to attack or use potion
	    // if use potion:
	        // display list of potion objects
	        // prompt selection
	        // apply selected potion effect to player
	    // if attack enemy:
	        // subtract health from enemy
	// if enemy turn
	    // subtract health from player

	if (this.isPlayerTurn) {
		inquirer
			.prompt({
				type: "list",
				name: "action",
				message: "Make your move!",
				choices: ["Attack", "Use potion"],
			})
			.then(({action}) => {
				if (action === "Use potion") {
					if (!this.player.getInventory()) {
						console.log(
							"You don't have any potions! As you were distracted by your rucksack, you lost your turn. :("
						);
						return;
					}

					inquirer
						.prompt({
							type: "list",
							name: "selection",
							message: "Select a potion to use.",
							choices: this.player
								.getInventory()
								.map((element, index) => {
									return `${index + 1}: ${element.name}`;
								}),
							// get the array that is the player's inventory, and use .map() to make a new array of strings we can use
                            // forgot the return keyword the first time
						})
						.then(({ selection }) => {
							const potionDetails = selection.split(": ");

							this.player.usePotion(potionDetails[0] - 1);
							console.log(
								`You drank the ${potionDetails[1]} potion.`
							);
						});
				} else {
					const damage = this.player.getAttackValue();
					this.currentEnemy.reduceHealth(damage);

					console.log(
						`You struck the ${
							this.currentEnemy.name
						}! ${this.currentEnemy.getHealth()}`
					);
				}
			});
	} else {
		const damage = this.currentEnemy.getAttackValue();
		this.player.reduceHealth(damage);

		console.log(
			`You were attacked by the ${
				this.currentEnemy.name
			}! ${this.player.getHealth()}`
		);
	}
};

Game.prototype.startNewBattle = function () {
	// determine whose turn it is
	if (this.player.agility > this.currentEnemy.agility) {
		this.isPlayerTurn = true;
	} else {
		this.isPlayerTurn = false;
	}

	console.log(this.currentEnemy.getDescription());

	console.log("Your stats are:");
	console.table(this.player.getStats());
	// woah!

	this.battle();
};

Game.prototype.initializeGame = function () {
	// initialize run of enemies
	this.enemies.push(
		new Enemy("zombie", "sword"),
		new Enemy("orc", "baseball bat"),
		new Enemy("skeleton", "axe")
	);

	this.currentEnemy = this.enemies[0];

	// prompt player to create player character
	inquirer
		.prompt({
			type: "input",
			name: "name",
			message: "What is your name?",
		})
		.then(({name}) => {
			// arrow function is required here so make sure "this" refers to the Game object :)
			this.player = new Player(name);

			this.startNewBattle();
		});
};

module.exports = Game;
