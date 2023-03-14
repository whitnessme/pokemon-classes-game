const readline = require("readline");

class Pokemon {
    constructor(name, type, number, level, gender) {
        this.name = name;
        this.type = type;
        this.number = number;
        this.level = level;
        this.gender = gender;
        this.nickname = null;
        this.isHolding = "nothing";
        this.hp = level * 2 + 10;
        this.moves = {};
    }

    gettingCaught() {
        const chance = Math.floor(Math.random() * this.hp)
        if (chance > this.hp / 2) {
            // Successful Catch
            const userInput = readline.createInterface({
                input: process.stdin,
                output: process.stdout
              });
            console.log(this.name + " was caught.")
            userInput.question(`Would you like to nickname this ${this.name}? Yes or No?`, answer => {
                if (answer.toLowerCase() === "yes" || answer.toLowerCase() === "y") {
                    userInput.question(`Please type ${this.name}'s nickname.`, answer => {
                        this.nickname = answer
                        console.log(this.nickname)
                        console.log(`Congrats! Your ${this.name} is named ${this.nickname}!`)

                        userInput.close()
                    })
                } else {
                    // No to nickname 
                    console.log(`${this.name} is now in your team.`)
                    userInput.close()
                }
            })
            return true;
        } else {
            // Unsuccessful Catch
            console.log(this.name + " was not caught!")
            return false;
        }
    }

    getNickname() {
        if (this.nickname) return this.nickname
        else return this.name
    }

    static getPokemonStats(...pokemon) {
        return pokemon.map(pokemon => {
            return {
                name: pokemon.name,
                type: pokemon.type,
                level: pokemon.level,
                nickname: pokemon.nickname,
                gender: pokemon.gender,
                isHolding: pokemon.isHolding
            }
        })
    }
}

// name, type, number, level, gender

let pikachu = new Pokemon("Pikachu", "Electric", 25, 10, "Male");
// console.log(Pokemon.getPokemonStats(pikachu))
