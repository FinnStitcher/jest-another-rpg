class Potion {
    // constructor (arguments) is necessary because we want to be able to feed in arguments
    // if that wasn't wanted, we could skip the function and put all that stuff directly in the class
    // i think
    constructor(name) {
        this.types = ['strength', 'agility', 'health'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];
        // the use of the OR operator here means it will grab a random type if no name is provided
        // good place to use Math.floor, given .length returns 1 more than the number of indices

        if (this.name === "health") {
            this.value = Math.floor(Math.random() * 11 + 30);
            // Math.random * 11 + 30 = a number from 30 to just under 41
            // Math.floor rounds it down so it can't return a number higher than 40
        } else {
            this.value = Math.floor(Math.random() * 6 + 7);
            // a number between 7 and 12
        }           
    }
};

module.exports = Potion;
