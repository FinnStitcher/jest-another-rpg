class Character {
    constructor(name = "") {
        this.name = name;
        
        this.health = Math.ceil(Math.random() * 10 + 95);
		// 95 to 105
		this.strength = Math.ceil(Math.random() * 5 + 7);
		this.agility = Math.ceil(Math.random() * 5 + 7);
		// 7 to 12
    }
    isAlive() {
        if (this.health === 0) {
            return false;
        } else {
            return true;
        }        
    }

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;
        // less places to change the numbers if we want to modify the strength value range or the min/max range

        return Math.ceil(Math.random() * (max - min) + min);        
    }

    reduceHealth(damage) {
        this.health -= damage;

        if (this.health < 0) {
            this.health = 0;
        }        
    }
};

module.exports = Character;