const Potion = require('../lib/Potion.js');

// testing that Potion.js is actually making objects...
test('creates a health potion object', () => {
    // using the new keyword to make an object using Potion, which we imported, as a blueprint
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
})

test('creates a random potion', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
})