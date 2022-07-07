const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

test("creates enemy", () => {
	const enemy = new Enemy("goblin", "sword");

	expect(enemy.name).toBe("goblin");
	expect(enemy.weapon).toBe("sword");
	expect(enemy.health).toEqual(expect.any(Number));
	expect(enemy.strength).toEqual(expect.any(Number));
	expect(enemy.agility).toEqual(expect.any(Number));
	expect(enemy.potion).toEqual(expect.any(Object));
});

test('gets enemy health value', () => {
    const enemy = new Enemy('goblin', 'sword');

    expect(enemy.getHealth())
    .toEqual(expect.stringContaining(
        enemy.health.toString()
    ));
    // checks if getHealth() returns a string that contains a numerical value matching the health property
    // stringContaining() is useful here because it means we don't have to change the test if we change the wording of the output
});

describe('check if enemy is alive', () => {
    const enemy = new Enemy('goblin', 'sword');

    test('full health', () => {
        expect(enemy.isAlive()).toBeTruthy();
    });

    test('zero health', () => {
        enemy.health = 0;

        expect(enemy.isAlive()).toBeFalsy();        
    });
});

describe('reduce enemy health', () => {
    const enemy = new Enemy('goblin', 'sword');
    const originalHealth = enemy.health;

    test('normal damage', () => {
        enemy.reduceHealth(5);
        expect(enemy.health).toBe(originalHealth - 5);
    });

    test('crazy damage', () => {
        enemy.reduceHealth(99999);
        expect(enemy.health).toBe(0)
    })
});

test('get enemy attack value', () => {
    const enemy = new Enemy('goblin', 'sword');
    enemy.strength = 10;

    expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
    expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

test('get description of enemy', () => {
    const enemy = new Enemy('goblin', 'sword');
    
    expect(enemy.getDescription()).toEqual(
        expect.stringContaining('goblin')
    );
    expect(enemy.getDescription()).toEqual(
        expect.stringContaining('sword')
    );
})