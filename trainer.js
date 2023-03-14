

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
}

module.exports = Trainer;