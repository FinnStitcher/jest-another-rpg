const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

test("creates a player object", () => {
	const player = new Player("Dave");

	expect(player.name).toBe("Dave");
	expect(player.health).toEqual(expect.any(Number));
	expect(player.strength).toEqual(expect.any(Number));
	expect(player.agility).toEqual(expect.any(Number));
});

test("player object has inventory", () => {
	const player = new Player("");

	expect(player.inventory).toEqual(
		expect.arrayContaining([expect.any(Object)])
	);
	// expect player.inventory to equal the truthiness/falsiness of the callback
	// the callback checks if there's an array containing at least one object
});

test("gets player stats as object", () => {
	const player = new Player("Dave");

	expect(player.getStats()).toHaveProperty("potions");
	expect(player.getStats()).toHaveProperty("health");
	expect(player.getStats()).toHaveProperty("strength");
	expect(player.getStats()).toHaveProperty("agility");
});

test("returns inventory or false", () => {
	const player = new Player("Dave");

	expect(player.getInventory()).toEqual(expect.any(Array));

	player.inventory = [];
	// the reference to an object called 'player' is constant, not anything in it

	expect(player.getInventory()).toEqual(false);
});

test("gets player health value", () => {
	const player = new Player("Dave");

	expect(player.getHealth()).toEqual(
		expect.stringContaining(player.health.toString())
	);
	// checks if getHealth() returns a string that contains a numerical value matching the health property
	// stringContaining() is useful here because it means we don't have to change the test if we change the wording of the output
});

describe("check if player is alive", () => {
	const player = new Player("Dave");

	test("full health", () => {
		expect(player.isAlive()).toBeTruthy();
	});

	test("zero health", () => {
		player.health = 0;

		expect(player.isAlive()).toBeFalsy();
	});
});

describe("reduce player health", () => {
	const player = new Player("Dave");
	const originalHealth = player.health;

	test("normal damage", () => {
		player.reduceHealth(5);
		expect(player.health).toBe(originalHealth - 5);
	});

	test("crazy damage", () => {
		player.reduceHealth(99999);
		expect(player.health).toBe(0);
	});
});

test("get player attack value", () => {
	const player = new Player("Dave");
	player.strength = 10;

	expect(player.getAttackValue()).toBeGreaterThanOrEqual(5);
	expect(player.getAttackValue()).toBeLessThanOrEqual(15);
});

test("adds potion to inventory", () => {
	const player = new Player("Dave");
	const ogCount = player.inventory.length;

	player.addPotion(new Potion());

	expect(player.inventory.length).toBeGreaterThan(ogCount);
});

test("remove potion from inventory", () => {
	const player = new Player("Dave");
	player.inventory = [new Potion(), new Potion(), new Potion()];
	const oldCount = player.inventory.length;

	player.usePotion(1);

	expect(player.inventory.length).toBeLessThan(oldCount);
});
