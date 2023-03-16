const Trainer = require("./trainer")

class GymLeader extends Trainer {
    constructor(name, age, gymLocation, type, team) {
        super(name, age)
        this.inventory = { hyperPotion: 2, fullRestore: 1}
        this.gymLocation = gymLocation;
        this.type = type;
        this.team = team;
    }

    getTeamNames() {
        console.log(`Wouldn't you like to know? I'll give you a hint, they're all ${this.type} type!`)
    }
}

module.exports = GymLeader