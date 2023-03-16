

class Trainer {
    constructor(name, age, inventory) {
        this.name = name;
        this.age = age;
        this.badges = [];
        this.inventory = {...inventory, "pokeball": 10, "potion": 10};
        this.team = {}; // key is Pokemon's name and value is the pokemon's instance
    }

    attemptToCatch(pokemon) {
        if (this.inventory.pokeball > 0) {
            // Attempt it!
            this.inventory.pokeball--
            const result = pokemon.gettingCaught();
            if (result) {
                const name = pokemon.getNickname();
                // Maybe we want the key to be the order they're in. 
                this.team[name] = pokemon
                const numOfTeam = Object.keys(this.team).length
                console.log(`You now have ${numOfTeam} Pokemon in your team now!`)
                return "Catch successful"
            } else {
                return "Catch unsuccessful"
            }
        } else {
            console.log("You are out of Pokeballs!")
            return;
        }
    }

    // Need a add to team instance method

    static getHighestBadgeTrainer(...trainers) {
        trainers.reduce((acc, trainer) => {
            if (trainer.badges.length > acc.mostBadgesSoFar) {
                return {"highestTrainer": trainer, "mostBadgesSoFar": trainer.badges.length}
            } else return acc
        }, {"highestTrainer": trainers[0], "mostBadgesSoFar": trainers[0].badges.length})
    }
}

module.exports = Trainer;