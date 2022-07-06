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
